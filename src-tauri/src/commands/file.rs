use tauri::AppHandle;

/// 显示保存文件对话框
#[tauri::command]
pub async fn show_save_dialog(
    app: AppHandle,
    default_path: String,
) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::{DialogExt, FilePath};
    
    let dialog = app.dialog()
        .file()
        .set_title("保存令牌数据")
        .set_file_name(&default_path)
        .add_filter("JSON Files", &["json"])
        .add_filter("All Files", &["*"]);
    
    match dialog.blocking_save_file() {
        Some(file_path) => {
            let path_str = match file_path {
                FilePath::Path(path) => path.to_string_lossy().to_string(),
                FilePath::Url(url) => url.to_string(),
            };
            Ok(Some(path_str))
        }
        None => Ok(None),
    }
}

/// 写入文本文件
#[tauri::command]
pub async fn write_text_file(
    path: String,
    content: String,
) -> Result<(), String> {
    use std::fs;
    
    fs::write(&path, content)
        .map_err(|e| format!("写入文件失败: {}", e))?;
    
    Ok(())
}

