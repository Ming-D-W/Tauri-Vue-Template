#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod system;

use system::SystemService;
use tauri::Manager;

#[tauri::command]
fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
fn get_app_data_dir(app: tauri::AppHandle) -> Result<String, String> {
    app.path()
        .app_data_dir()
        .map(|p| p.to_string_lossy().to_string())
        .map_err(|e| format!("Failed to get app data dir: {}", e))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            // 初始化系统服务
            let system_service = SystemService::new();
            app.manage(system_service);
            println!("✅ System service initialized");

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_app_version,
            get_app_data_dir,
            // System commands
            commands::system_get_home_dir,
            commands::system_execute_command,
            commands::system_read_file,
            commands::system_write_file,
            commands::system_file_exists,
            commands::system_get_info,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

