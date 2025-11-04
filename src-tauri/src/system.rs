use std::process::Command;
use std::fs;
use std::path::Path;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct CommandResult {
    pub stdout: String,
    pub stderr: String,
    pub success: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SystemInfo {
    pub os: String,
    pub arch: String,
    pub os_version: String,
}

pub struct SystemService;

impl SystemService {
    pub fn new() -> Self {
        SystemService
    }
    
    pub fn get_home_dir(&self) -> Result<String, String> {
        std::env::var("HOME")
            .map_err(|e| format!("Failed to get home directory: {}", e))
    }
    
    pub fn execute_command(&self, cmd: &str, args: Vec<String>) -> Result<CommandResult, String> {
        // 安全白名单
        let allowed_commands = vec!["killall", "ps", "ls", "cat", "mkdir", "rm", "pgrep", "open"];
        
        if !allowed_commands.contains(&cmd) {
            return Err(format!("Command '{}' is not allowed", cmd));
        }
        
        let output = Command::new(cmd)
            .args(&args)
            .output()
            .map_err(|e| format!("Failed to execute command: {}", e))?;
        
        Ok(CommandResult {
            stdout: String::from_utf8_lossy(&output.stdout).to_string(),
            stderr: String::from_utf8_lossy(&output.stderr).to_string(),
            success: output.status.success(),
        })
    }
    
    pub fn read_file(&self, path: &str) -> Result<String, String> {
        fs::read_to_string(path)
            .map_err(|e| format!("Failed to read file: {}", e))
    }
    
    pub fn write_file(&self, path: &str, content: &str) -> Result<(), String> {
        fs::write(path, content)
            .map_err(|e| format!("Failed to write file: {}", e))
    }
    
    pub fn file_exists(&self, path: &str) -> bool {
        Path::new(path).exists()
    }
    
    pub fn backup_file(&self, path: &str) -> Result<String, String> {
        if !self.file_exists(path) {
            return Err("File does not exist".to_string());
        }
        
        let backup_path = format!("{}.backup", path);
        fs::copy(path, &backup_path)
            .map_err(|e| format!("Failed to backup file: {}", e))?;
        
        Ok(backup_path)
    }
    
    pub fn restore_file(&self, backup_path: &str, original_path: &str) -> Result<(), String> {
        fs::copy(backup_path, original_path)
            .map_err(|e| format!("Failed to restore file: {}", e))?;

        Ok(())
    }

    pub fn get_system_info(&self) -> SystemInfo {
        SystemInfo {
            os: std::env::consts::OS.to_string(),
            arch: std::env::consts::ARCH.to_string(),
            os_version: Self::get_os_version(),
        }
    }

    fn get_os_version() -> String {
        #[cfg(target_os = "macos")]
        {
            if let Ok(output) = Command::new("sw_vers").arg("-productVersion").output() {
                return String::from_utf8_lossy(&output.stdout).trim().to_string();
            }
        }

        #[cfg(target_os = "windows")]
        {
            if let Ok(output) = Command::new("cmd").args(&["/C", "ver"]).output() {
                return String::from_utf8_lossy(&output.stdout).trim().to_string();
            }
        }

        #[cfg(target_os = "linux")]
        {
            if let Ok(content) = fs::read_to_string("/etc/os-release") {
                for line in content.lines() {
                    if line.starts_with("PRETTY_NAME=") {
                        return line.replace("PRETTY_NAME=", "").trim_matches('"').to_string();
                    }
                }
            }
        }

        "Unknown".to_string()
    }

    pub fn get_file_size(&self, path: &str) -> Result<u64, String> {
        let metadata = fs::metadata(path)
            .map_err(|e| format!("Failed to get file metadata: {}", e))?;
        Ok(metadata.len())
    }
}

