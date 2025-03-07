/**
 * Google表單預填答案網址產生+欄位(entry)ID查詢工具 Google Forms Pre-fill URL Generator & Entry ID Finder
 * @author blues32767
 * @version 1.1.0
 * @created taiwan 2025/03/07
 * @github https://github.com/blues32767
 * *修正如果表單title有特殊符號"&"則無法判斷的bug。
 */


// code.gs
function doGet(e) {
  return HtmlService.createTemplateFromFile('web').evaluate();
}

function getFormFields(formUrl) {
  try {
    var response = UrlFetchApp.fetch(formUrl);
    var htmlContent = response.getContentText();
    
    var match = htmlContent.match(/var FB_PUBLIC_LOAD_DATA_ = ([\s\S]*?);<\/script>/);
    if (!match) return "無法找到表單資料 Unable to find form data";
    
    // 替換特殊字符序列，這些字符可能導致 JSON 解析錯誤
    let jsonStr = match[1];
    
    // 特殊處理表單標題部分，這是最常見的問題來源
    // 找到表單標題的位置
    let titleStartPos = jsonStr.indexOf('"', jsonStr.indexOf('[null,[[')) + 1;
    let titleEndPos = jsonStr.indexOf('"', titleStartPos);
    
    if (titleStartPos > 0 && titleEndPos > titleStartPos) {
      // 提取表單標題並將其替換為安全字符串
      let formTitle = jsonStr.substring(titleStartPos, titleEndPos);
      let safeTitle = "FORM_TITLE_PLACEHOLDER";
      jsonStr = jsonStr.substring(0, titleStartPos) + safeTitle + jsonStr.substring(titleEndPos);
    }
    
    // 嘗試解析修改後的 JSON
    var formData;
    try {
      formData = JSON.parse(jsonStr);
    } catch (parseError) {
      return "表單數據格式無效 Invalid form data format: " + parseError.toString();
    }
    
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


// 根據欄位ID和原始數據確定欄位類型和選項
function determineFieldType(rawData, fieldId) {
  // 預設為文本類型
  var result = {
    type: 'TEXT',
    options: null
  };
  
  try {
    // 尋找這個欄位ID附近的類型信息
    var fieldSection = rawData.substring(rawData.indexOf(fieldId) - 100, rawData.indexOf(fieldId) + 500);
    
    // 判斷欄位類型
    if (fieldSection.includes('"' + fieldId + '",null,0')) {
      result.type = 'TEXT';
    } else if (fieldSection.includes('"' + fieldId + '",null,1')) {
      result.type = 'PARAGRAPH';
    } else if (fieldSection.includes('"' + fieldId + '",[[')) {
      // 可能是單選、多選或下拉選單
      if (fieldSection.includes('null,2,[[')) {
        result.type = 'RADIO';
        result.options = extractOptions(fieldSection);
      } else if (fieldSection.includes('null,4,[[')) {
        result.type = 'CHECKBOX';
        result.options = extractOptions(fieldSection);
      } else if (fieldSection.includes('null,3,[[')) {
        result.type = 'LIST';
        result.options = extractOptions(fieldSection);
      } else if (fieldSection.includes('null,7,[[')) {
        result.type = 'GRID';
        // 網格型欄位的處理比較複雜，這裡簡化處理
      } else if (fieldSection.includes('null,9,[[')) {
        result.type = 'DATE_TIME';
      } else if (fieldSection.includes('null,10,[[')) {
        result.type = 'TIME';
      }
    }
    
    return result;
  } catch (e) {
    // 如果解析失敗，返回默認文本類型
    return result;
  }
}

// 提取選項列表
function extractOptions(fieldSection) {
  var options = [];
  var optionRegex = /"([^"]*)"\s*,\s*null\s*,\s*null\s*,\s*null\s*,\s*\d+/g;
  var optionMatch;
  
  while ((optionMatch = optionRegex.exec(fieldSection)) !== null) {
    options.push(optionMatch[1]);
  }
  
  return options.length > 0 ? options : null;
}


