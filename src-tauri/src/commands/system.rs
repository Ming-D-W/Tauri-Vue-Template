use tauri::State;
use crate::system::{SystemService, CommandResult, SystemInfo};

#[tauri::command]
pub fn system_get_home_dir(system: State<SystemService>) -> Result<String, String> {
    system.get_home_dir()
}

#[tauri::command]
pub fn system_execute_command(cmd: String, args: Vec<String>, system: State<SystemService>) -> Result<CommandResult, String> {
    system.execute_command(&cmd, args)
}

#[tauri::command]
pub fn system_read_file(path: String, system: State<SystemService>) -> Result<String, String> {
    system.read_file(&path)
}

#[tauri::command]
pub fn system_write_file(path: String, content: String, system: State<SystemService>) -> Result<(), String> {
    system.write_file(&path, &content)
}

#[tauri::command]
pub fn system_file_exists(path: String, system: State<SystemService>) -> bool {
    system.file_exists(&path)
}

#[tauri::command]
pub fn system_get_info(system: State<SystemService>) -> SystemInfo {
    system.get_system_info()
}
