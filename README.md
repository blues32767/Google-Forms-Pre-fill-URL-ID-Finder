# Google表單欄位ID(entry)資訊查詢工具 
# Google Form Question Entry ID Find tool

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Updated](https://img.shields.io/badge/updated-2025--02--19-green)

[English](#english) | [中文說明](#chinese)

工具連結 | Tool Link: https://script.google.com/macros/s/AKfycbwhxuWAOrCc36cLnAmr4VnEvgue0cXF1R-cOCii2uwOUViptrsrLk5osbf5i_AKnbRy/exec

<a name="chinese"></a>
# 中文說明

這是一個專門用於查詢 Google 表單欄位 entry ID 的工具。當您需要透過程式自動填寫或處理 Google 表單時，這個工具可以幫助您快速獲取所需的 entry ID、欄位標題與必填狀態資訊，並且可以直接產生預填網址。

## 主要功能

- 🔍 快速查詢表單欄位的名稱、欄位entry ID（例如：entry.1234567890）
- ✏️ 可產生預填答案的網址
- 📋 點擊即可複製欄位資訊
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

A specialized tool for inspecting Google Form field entry IDs and generating prefilled URLs. This tool helps developers quickly retrieve entry IDs, field titles, and required status information when working with Google Forms programmatically.

## Key Features

- 🔍 Quick lookup of form field names and entry IDs (e.g., entry.1234567890)
- 📋 One-click copy of field information
- ✨ Clear indication of required fields
-  ✏️Generate prefilled URL with answers
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
- Version: 1.0.0
- Last Updated: Taiwan 2025/02/19

## License

MIT License

## Changelog

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
