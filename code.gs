/**
 * Google 表單欄位(Entry ID)資訊查詢工具 Google Form Question Entry ID Find tool
 * @author blues32767
 * @version 1.0.0
 * @created taiwan 2025/02/19
 * @github https://github.com/blues32767
 */


// code.gs
function doGet(e) {
  return HtmlService.createTemplateFromFile('web').evaluate();
}

function getFormFields(formUrl) {
  try {
    var response = UrlFetchApp.fetch(formUrl);
    var htmlContent = response.getContentText();
    
    // 尋找 FB_PUBLIC_LOAD_DATA_
    var match = htmlContent.match(/var FB_PUBLIC_LOAD_DATA_ = (.*?);/);
    if (!match) return "無法找到表單資料 Unable to find form data";
    
    var formData = JSON.parse(match[1]);
    var fields = formData[1][1]; // 取得欄位資訊
    
    // 整理欄位資訊
    var fieldInfo = fields.map(function(field) {
      if (field && field[4] && field[4][0]) { // 修改這裡以正確獲取entry ID
        return {
          title: field[1], // 題目標題
          id: field[4][0][0], // 直接使用數字ID，不加"entry."前綴
          required: field[4][0][2] === 1 // 必填欄位檢查
        };
      }
    }).filter(Boolean);
    
    return fieldInfo;
  } catch (error) {
    Logger.log(error);
    return "Error錯誤：" + error.toString();
  }
}

