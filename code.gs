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
    
    var match = htmlContent.match(/var FB_PUBLIC_LOAD_DATA_ = (.*?);/);
    if (!match) return "無法找到表單資料 Unable to find form data";
    
    var formData = JSON.parse(match[1]);
    var fields = formData[1][1];
    
    var fieldInfo = fields.map(function(field) {
      if (field && field[4] && field[4][0]) {
        let fieldData = {
          title: field[1],
          id: field[4][0][0],
          required: field[4][0][2] === 1
        };

        // 根據欄位類型設置對應的處理方式
        switch(field[3]) {
          case 0: // 簡答文字
            fieldData.type = 'TEXT';
            break;
          case 1: // 段落文字
            fieldData.type = 'PARAGRAPH';
            break;
          case 2: // 選擇題（單選）
            fieldData.type = 'RADIO';
            if (field[4][0][1]) {
              fieldData.options = field[4][0][1].map(option => option[0]);
            }
            break;
          case 3: // 下拉選單
            fieldData.type = 'LIST';
            if (field[4][0][1]) {
              fieldData.options = field[4][0][1].map(option => option[0]);
            }
            break;
          case 4: // 核取方塊（多選）
            fieldData.type = 'CHECKBOX';
            if (field[4][0][1]) {
              fieldData.options = field[4][0][1].map(option => option[0]);
            }
            break;

          case 7: // 方格（單選或多選）
              // 修改判斷邏輯，根據欄位標題判斷是否為核取方格
              fieldData.type = field[1].toLowerCase().includes('核取') ? 'GRID_CHECKBOX' : 'GRID';
              fieldData.rows = field[4].map(row => ({
                  title: row[2][0],
                  id: row[0],
                  options: row[1].map(opt => opt[0])
              }));
              break;
          case 9: // 日期
              fieldData.type = 'DATE_TIME';
              fieldData.includesTime = field[4][0][7] && field[4][0][7][0]; // 檢查是否包含時間
              break;
              
          case 10: // 時間
              fieldData.type = 'TIME';
              break;

          default:
            fieldData.type = 'TEXT';
        }

        return fieldData;
      }
    }).filter(Boolean);
    
    return fieldInfo;
  } catch (error) {
    Logger.log(error);
    return "Error錯誤：" + error.toString();
  }
}



