# Google 表單預填網址產生器 + 欄位 ID 查詢工具
# Google Forms Pre-fill URL Generator & Question Entry ID Finder

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![Updated](https://img.shields.io/badge/updated-2025--02--19-green)

[English](#english) | [中文說明](#chinese)

工具連結 | Tool Link: <a href="https://script.google.com/macros/s/AKfycbwhxuWAOrCc36cLnAmr4VnEvgue0cXF1R-cOCii2uwOUViptrsrLk5osbf5i_AKnbRy/exec" target="_blank">https://script.google.com/macros/s/AKfycbwhxuWAOrCc36cLnAmr4VnEvgue0cXF1R-cOCii2uwOUViptrsrLk5osbf5i_AKnbRy/exec</a>

<a name="chinese"></a>
# 中文說明

這是一個整合預填網址產生和欄位 ID 查詢的工具。當您需要透過程式自動填寫或處理 Google 表單時，這個工具可以幫助您：
1. 快速獲取所需的 entry ID、欄位標題與必填狀態資訊
2. 直接產生預填答案的網址

## 使用限制

⚠️ 本工具有以下限制：
1. 無法讀取需要登入的 Google 表單（例如：含有檔案上傳功能的表單）
2. 無法預先填寫日期、時間欄位

## 主要功能

- 🔍 快速查詢表單欄位的名稱、欄位 entry ID（例如：entry.1234567890）
- ✏️ 自動產生預填答案的網址
- 📋 點擊即可複製欄位資訊或預填網址
- ✨ 清楚顯示必填欄位標記
- 🎯 簡潔直觀的操作介面
- 💡 複製成功即時提示


## 使用說明

### 基本查詢
1. 開啟工具網頁
2. 貼上 Google 表單網址（例如：https://docs.google.com/forms/d/e/...）
3. 點擊「查詢欄位資訊」按鈕
4. 點擊任何欄位ID即可複製

### 預填網址功能
1. 在查詢結果中的「使用者答案」欄位輸入測試答案
2. 系統會自動生成包含預填答案的網址
3. 使用「複製預填網址」按鈕複製完整網址
4. 可直接使用該網址測試預填效果

## 技術實作

- Google Apps Script 後端
- HTML5 + CSS3 前端介面
- JavaScript 互動功能
- Google Forms API 整合

[查看更多中文說明...](#chinese-full)

---

<a name="english"></a>
# English Documentation

A comprehensive tool that combines Google Forms pre-fill URL generation and field ID lookup capabilities. This tool helps developers and users to:
1. Quickly retrieve entry IDs, field titles, and required status information
2. Generate pre-filled URLs for Google Forms

## Limitations

⚠️ Please note the following limitations:
1. Cannot process Google Forms that require login (e.g., forms with file upload)
2. Cannot pre-fill date and time fields

## Key Features

- 🔍 Quick lookup of form field names and entry IDs (e.g., entry.1234567890)
- ✏️ Automatic generation of pre-filled URLs
- 📋 One-click copy of field information and pre-filled URLs
- ✨ Clear indication of required fields
- 🎯 Intuitive user interface
- 💡 Instant copy confirmation


## How to Use

### Basic Query
1. Open the tool webpage
2. Paste your Google Form URL (e.g., https://docs.google.com/forms/d/e/...)
3. Click "Search Fields"
4. Click any field ID to copy

### Prefilled URL Feature
1. Enter test answers in the "User Answer" column of the query results
2. The system will automatically generate a URL with prefilled answers
3. Use the "Copy Prefilled URL" button to copy the complete URL
4. Test the prefill effect directly using the generated URL

## Technical Implementation

- Google Apps Script Backend
- HTML5 + CSS3 Frontend
- JavaScript Interactions
- Google Forms API Integration

[View more in English...](#english-full)


---

<a name="chinese-full"></a>
# 完整中文說明

## 專案結構
...
[中文完整內容]

## 檔案結構

```
├── code.gs          # Google Apps Script 後端程式碼
└── web.html        # 前端介面
```

## 安裝步驟

1. 開啟 [Google Apps Script](https://script.google.com/)
2. 建立新專案
3. 複製 `Code.gs` 內容到專案["指令碼"]中
4. 按+建立"HTML"將 `web.html` 檔案並複製內容
5. "部署"為網頁應用程式
6. 設定適當的存取權限

## 開發者資訊

- 作者：blues32767
- GitHub：[blues32767](https://github.com/blues32767)
- 版本：1.0.0
- 更新日期：Taiwan 2025/02/19

## 授權條款

MIT License

## 更新記錄

### v1.1.0 (2025/03/07)
- 修復表單標題如有特殊符號「&」則無法判斷的bug。
  
### v1.0.0 (2025/02/19)
- 初始版本發布
- 實現基本查詢功能
- 加入複製提示功能
- 優化使用者介面

## 貢獻指南

歡迎提交 Issue 或 Pull Request 來改善這個工具！

1. Fork 這個專案
2. 建立您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request

---

<a name="english-full"></a>
# Full English Documentation

## Project Structure
...
[English full content]

## Installation Steps

1. Open [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy `Code.gs` content into the project
4. Create `web.html` file and copy the content
5. Deploy as a web application
6. Configure appropriate access permissions

## Developer Information

- Author: blues32767
- GitHub: [blues32767](https://github.com/blues32767)
- Version: 1.1.0
- Last Updated: Taiwan 2025/03/07


## License

MIT License

## Changelog

### v1.1.0 (2025/03/07)
- 20250307-Fixed the bug that the form title cannot be judged if there is a special symbol "&".
- 
### v1.0.0 (2025/02/19)
- Initial release
- Implemented basic query functionality
- Added copy notification feature
- Enhanced user interface

## Contributing

Contributions are welcome! Feel free to submit Issues or Pull Requests to improve this tool.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License | 授權條款

MIT License

## Contact | 聯絡方式

- Developer | 開發者：blues32767
- GitHub：[blues32767](https://github.com/blues32767)
