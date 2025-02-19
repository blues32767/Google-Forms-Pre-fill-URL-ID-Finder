/**
 * Google 表單欄位資訊查詢工具
 * @author blues32767
 * @version 1.0.0
 * @created 2025/02/19
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
    if (!match) return "無法找到表單資料";
    
    var formData = JSON.parse(match[1]);
    var fields = formData[1][1]; // 取得欄位資訊
    
    // 整理欄位資訊
    var fieldInfo = fields.map(function(field) {
      if (field && field[0]) {
        return {
          title: field[1],
          id: "entry." + field[0],
          required: field[4] && field[4][0] && field[4][0][2] === 1
        };
      }
    }).filter(Boolean);
    
    return fieldInfo;
  } catch (error) {
    Logger.log(error);
    return "錯誤：" + error.toString();
  }
}
