# Google表單欄位ID(entry)資訊查詢工具 (Google Form Entry ID Inspector)

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Updated](https://img.shields.io/badge/updated-2025--02--19-green)

查詢工具連結：https://script.google.com/macros/s/AKfycbwhxuWAOrCc36cLnAmr4VnEvgue0cXF1R-cOCii2uwOUViptrsrLk5osbf5i_AKnbRy/exec

這是一個專門用於查詢 Google 表單欄位 entry ID 的工具。當您需要透過程式自動填寫或處理 Google 表單時，這個工具可以幫助您快速獲取所需的 entry ID、欄位標題與必填狀態資訊。

## 主要功能

- 🔍 快速查詢表單欄位的名稱、欄位entry ID（例如：entry.1234567890）
- 📋 點擊即可複製欄位資訊
- ✨ 清楚顯示必填欄位標記
- 🎯 簡潔直觀的操作介面
- 💡 複製成功即時提示

## 使用說明

1. 開啟工具網頁
2. 貼上 Google 表單網址（例如：https://docs.google.com/forms/d/e/...）
3. 點擊「查詢欄位資訊」按鈕
4. 點擊任何欄位資訊即可複製

## 技術實作

- Google Apps Script 後端
- HTML5 + CSS3 前端介面
- JavaScript 互動功能
- Google Forms API 整合

## 專案結構

```
├── 程式碼.gs          # Google Apps Script 主程式
└── 網頁.html        # 前端網頁介面
```

## 部署方式

1. 前往 [Google Apps Script](https://script.google.com/)
2. 建立新專案
3. 複製 `Code.gs` 程式碼
4. 新增 HTML 檔案命名為「web」並複製內容
5. 部署為網頁應用程式
6. 設定存取權限

## 開發資訊

- 開發者：blues32767
- GitHub：[blues32767](https://github.com/blues32767)
- 版本號：1.0.0
- 更新日期：2025/02/19

## 授權說明

MIT License

## 版本紀錄

### v1.0.0 (2025/02/19)
- 首次發布
- 實現 entry ID 查詢功能
- 支援一鍵複製功能
- 完成使用者介面設計
- 加入複製成功提示

## 問題回報與建議

歡迎透過以下方式提供意見：

1. 在 GitHub 上開立 Issue
2. 提交 Pull Request
3. 直接聯繫開發者

## 開發貢獻

如果您想要協助改善這個工具：

1. Fork 此專案
2. 建立您的功能分支 (`git checkout -b feature/YourFeature`)
3. 提交變更 (`git commit -m '新增功能：XXX'`)
4. 推送到分支 (`git push origin feature/YourFeature`)
5. 建立 Pull Request

## 使用範例

### 查詢結果範例
```
欄位標題：姓名
Entry ID：entry.1234567890
必填欄位：是

欄位標題：電子郵件
Entry ID：entry.2345678901
必填欄位：是
```

## 注意事項

- 使用本工具時請確保您有適當的權限存取目標表單
- 建議在使用 entry ID 進行表單操作時遵守 Google 表單的使用規範
- 本工具僅供開發測試使用，請勿用於惡意目的
