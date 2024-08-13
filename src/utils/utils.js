function doGet() {
    const html = HtmlService.createTemplateFromFile("index");
    return html
      .evaluate()
      .setTitle('SDG Idea Analysis Dashaboard')
      // .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0");
  }
  
  /**************************************************
   * Spreadsheet DB
   **************************************************/
  
  const spreadsheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
  const ss = SpreadsheetApp.openById(spreadsheetID);
  const sheets = ss.getSheets()
  
  /**************************************************
   * Database Methods
   **************************************************/
  
  const getColumnSchema = () => {
    // const f = sheet.getRange("A1").getDataRegion().getLastRow()
    var allHeaders = [];
  
  
    sheets.map((sheet) => {
  
      // var cur_sh_name = SpreadsheetApp.getActiveSheet().getName();
  
  
      // for (var i=0 ; i<sheet.length ; i++){
      var sh_name = sheet.getName();
      console.log(sh_name)
  
      // if (sh_name != cur_sh_name){
      // var sheet = spreadsheet.getSheetByName(sh_name);
      var lastCol = sheet.getLastColumn();
      var headerNames = sheet.getRange(1, 1, 1, lastCol).getValues();
      // const data = sheet.getRange(start_row,start_col,no_of_rows,no_of_col).getValues();
  
      // console.log(headerNames);
      allHeaders.push(headerNames)
    }
      // }
  
      // }
    )
  
    df = allHeaders.map((row) =>
  
      row
        .map((col, i) => ({ "field": col }))
        .reduce((old, current) => ({ ...old, ...current }), {})
    );
    console.log(allHeaders)
    return allHeaders
  };
  
  
  
  
  
  
  
  
  
  const getData = () => {
  
    const spreadsheetID = "18-xX1t0IApykZRY9XfMWSNL17Skqn9U0ozxyUBlfjHo";
    const ss = SpreadsheetApp.openById(spreadsheetID);
    const sheets = ss.getSheets()
    let result = []
    const APP_DATA = {}
  
    sheets.map((sheet) => {
  
  
  
      const sh_name = sheet.getName();
      console.log(sh_name)
  
      let start_row = 1
      let start_col = 6
      //2 - 6
      let no_of_rows = sheet.getRange(1, 17).getValue()
      //4 -10
      let no_of_col = 10
      console.log(start_row, start_col, no_of_rows, no_of_col)
  
  
      const data = sheet.getRange(start_row, start_col, no_of_rows, no_of_col).getValues();
      // console.log(data)
      const fields = data.shift();
      // console.log(data);
      const info = data.flatMap((row) =>
        row
          .map((col, i) => ({ [fields[i]]: col }))
          .reduce((old, current) => ({ ...old, ...current }), {})
      )
      console.log(info)
  
      APP_DATA[[sh_name]] = info
    })
    return APP_DATA
  };
  
  const getUserByField = (field, value) => {
    return getData().find((e) => e[field] == value);
  };
  
  const getUserInfo = () => {
    const userEmail = Session.getActiveUser().getEmail();
    // return getUserByField("email", userEmail);
    return userEmail
  };
  
  /**************************************************
   * TESTS
   **************************************************/
  
  const __test__getData = () => {
    const df = getData()
    const folderId = "1rJc9lRxXk6EdG2Mcs9ITjdCZ0Qo0hc78"
    const folder = DriveApp.getFolderById(folderId);
    folder.createFile("metadata" + '.json', JSON.stringify(df), MimeType.PLAIN_TEXT)
  };
  
  const __test__getUserByField = () => {
    console.log(getUserByField("id", 600));
  };
  
  const __test__getUserInfo = () => {
    console.log(getUserInfo());
  };
  
  const __tets__func = () => {
    const spreadsheetID = "1Ff8g80LJdUGu0enZSvRuGZNToyiq_Yt6cIu2gQKHg10";
    const ss = SpreadsheetApp.openById(spreadsheetID);
    console.log(ss)
    var out = new Array()
    var sheets = ss.getSheets();
    for (var i = 0; i < 26; i++) out.push(sheets[i].getName())
    console.log(out)
  
  }
  
  /***************************************************/
  
  
  
  
  const createMetaData = () => {
    const spreadsheetID = "18-xX1t0IApykZRY9XfMWSNL17Skqn9U0ozxyUBlfjHo";
    const ss = SpreadsheetApp.openById(spreadsheetID);
    const sheets = ss.getSheets()
    let result = []
    const APP_DATA = {}
  
    sheets.map((sheet) => {
  
  
  
      const sh_name = sheet.getName();
      console.log(sh_name)
  
      let start_row = 1
      let start_col = 6
      //2 - 6
      let no_of_rows = sheet.getRange(1, 17).getValue()
      //4 -10
      let no_of_col = 10
      console.log(start_row, start_col, no_of_rows, no_of_col)
  
  
      const data = sheet.getRange(start_row, start_col, no_of_rows, no_of_col).getValues();
      // console.log(data)
      const fields = data.shift();
      // console.log(data);
      const info = data.flatMap((row) =>
        row
          .map((col, i) => ({ [fields[i]]: col }))
          .reduce((old, current) => ({ ...old, ...current }), {})
      )
      console.log(info)
  
      APP_DATA[[sh_name]] = info
    })
    let fileId = "1XLuVuXpCEgetdNngwvK1C2UX5lo-G7P5"
    let file = DriveApp.getFileById(fileId);
  
    if (!file) {
      file = DriveApp.getFolderById("1rJc9lRxXk6EdG2Mcs9ITjdCZ0Qo0hc78").createFile("metadata.json", JSON.stringify(APP_DATA))
    } else {
      Logger.log("file exists")
      file = DriveApp.getFileById(fileId).setContent(JSON.stringify(APP_DATA))
    }
  
    Logger.log(file.getId())
    return file.getId()
  };
  
  const geMetatData = () => {
    let fileId = "1XLuVuXpCEgetdNngwvK1C2UX5lo-G7P5"
    const file = DriveApp.getFileById(fileId).getBlob().getDataAsString();
    return JSON.parse(file)
  };
  
  const __test__createMetaData = () => {
    console.log(createMetaData())
  }
  
  
  
  
  
  
  
  
  function duplicateWorkbook() {
    const sourceSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
    const ss = SpreadsheetApp.openById(sourceSheetID);
    const sheets = ss.getSheets();
  
    const targetSheetID = "1zyJxinQv31lPlP_QUQdsgOrSyfJBC33Loix_AZeXXDE";
    const newWorkbook = SpreadsheetApp.openById(targetSheetID);
    // const newWorkbookSheets = newWorkbook.getSheets();
  
    for (var i = 0; i < sheets.length; i++) {
      var sourceSheet = sheets[i];
      var sourceSheetName = sourceSheet.getName();
  
      // Create a new sheet in the new workbook with the same name
      var newSheet = newWorkbook.insertSheet(sourceSheetName);
  
      // // Copy the header row (assumes it's the first row) from the source sheet
      // var headerRange = sourceSheet.getRange(1, 1, 1, sourceSheet.getLastColumn());
      //   const newWorkbookSheets = newWorkbook.getSheets();
      // headerRange.copyTo(newSheet.getRange(1, 1));
  
      // // Set the width of columns in the new sheet to match the source sheet
      // for (var j = 1; j <= sourceSheet.getLastColumn(); j++) {
      //   newSheet.setColumnWidth(j, sourceSheet.getColumnWidth(j));
      // }
  
      // Optional: You can also set other sheet properties like background color, text color, etc. here.
    }
  
    // Optional: You can add more customization or formatting to the new workbook here.
  }
  
  
  
  function transposeColumnData() {
    const sourceSheetID = "18-xX1t0IApykZRY9XfMWSNL17Skqn9U0ozxyUBlfjHo";
    const ss = SpreadsheetApp.openById(sourceSheetID);
    const sheets = ss.getSheets();
  
    const targetSheetID = "1qjQ3iMbThI5VRcSxXKAVYoUb_sA2UndVDiQJtyNGs9E";
    const ts = SpreadsheetApp.openById(targetSheetID);
    const sheets_ts = ts.getSheets();
  
    for (var i = 0; i < sheets.length; i++) {
      var sourceSheet = sheets[i];
      const sh_name = sourceSheet.getName();
      console.log(sh_name);
  
      // Find the corresponding target sheet by name
      var targetSheet = null;
      for (var j = 0; j < sheets_ts.length; j++) {
        if (sheets_ts[j].getName() === sh_name) {
          targetSheet = sheets_ts[j];
          break;
        }
      }
  
      if (!targetSheet) {
        Logger.log("Target sheet not found for: " + sh_name);
        continue; // Skip to the next source sheet
      }
  
      // Get the data range in the source sheet that you want to transpose
      var sourceDataRange = sourceSheet.getRange(2, 1, sourceSheet.getLastRow() - 1); // Change this range to your specific columns
  
      // Get the values from the selected data range
      var values = sourceDataRange.getValues();
  
      // Transpose the data
      var transposedData = [];
      for (var j = 0; j < values[0].length; j++) {
        transposedData.push([]);
        for (var k = 0; k < values.length; k++) {
          transposedData[j].push(values[k][j]);
        }
      }
      // console.log(values)
      // transposedData[0].push('timeStamp')
  
      // Get the target row in the target sheet where you want to paste the transposed data
      var targetRow = targetSheet.getRange(1, 2, 1, transposedData[0].length); // Change this to your desired target row
      // var targetRow_clear = targetSheet.getRange(1, 2, 1, targetSheet.getLastColumn()); // Change this to your desired target row
      // targetRow_clear.clearContent();
      // Set the values in the target row in the target sheet
      targetRow.setValues(transposedData);
    }
  }
  
  // function applyFormulaToSheets() {
  //   const spreadsheetID = "1zyJxinQv31lPlP_QUQdsgOrSyfJBC33Loix_AZeXXDE";
  //   const ss = SpreadsheetApp.openById(spreadsheetID);
  //   const sheets = ss.getSheets();
  
  //   sheets.map((sheet) => {
  
  //     // var formula = '={"id";ArrayFormula(if(' + sheet.getRange("B2:B").getA1Notation() + '<>"",row(' + sheet.getRange("A2:A").getA1Notation() + ')-1,""))}';
  
      
  //   var i=1
  
  //     while(i<26){
  
  //     var formula = '=UNIQUE(IMPORTRANGE("1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw","'+sheet.getName()+'!'+String.fromCharCode(64+i)+':'+String.fromCharCode(64+i)+'"))';
  
  // // let range =  '"'+String.fromCharCode(64+i)+'1"'
  
  // // console.log(range)
    
  //      sheet.getRange(1,i).setFormula(formula);
  
  //     i=i+1
  //     }
      
     
  
  //     //       var formula2 = '={"isServer";ArrayFormula(if(' + sheet.getRange("B2:B").getA1Notation() + '<>"",true,""))}';
  //     //   sheet.getRange(1, sheet.getLastColumn() + 1).setFormula(formula2);
  
  //     //       var formula3 = '={"isNew";ArrayFormula(if(' + sheet.getRange("B2:B").getA1Notation() + '<>"",false,""))}';
  //     //   sheet.getRange(1, sheet.getLastColumn() + 1).setFormula(formula3);
  
  //     //       var formula4 = '={"isModified";ArrayFormula(if(' + sheet.getRange("B2:B").getA1Notation() + '<>"",false,""))}';
  //     //   sheet.getRange(1, sheet.getLastColumn() + 1).setFormula(formula4);
  //     //           var formula4 = '={"isDeleted";ArrayFormula(if(' + sheet.getRange("B2:B").getA1Notation() + '<>"",false,""))}';
  //     //   sheet.getRange(1, sheet.getLastColumn() + 1).setFormula(formula4);
  //   })
  
  
  // }
  
  
  
  
  
  
  function getAndStoreUniqueRecords() {
    const sourceSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
    const ss = SpreadsheetApp.openById(sourceSheetID);
    const sheets = ss.getSheets();
  
    const targetSheetID = "1zyJxinQv31lPlP_QUQdsgOrSyfJBC33Loix_AZeXXDE";
    const ts = SpreadsheetApp.openById(targetSheetID);
    const sheets_ts = ts.getSheets();
  
    for (var i = 0; i < sheets.length; i++) {
      var sourceSheet = sheets[i];
      const sourceSheetName = sourceSheet.getName();
      console.log(sourceSheetName);
  
      // Find the corresponding target sheet by name
      var targetSheet = null;
      for (var j = 0; j < sheets_ts.length; j++) {
        if (sheets_ts[j].getName() === sourceSheetName) {
          targetSheet = sheets_ts[j];
          break;
        }
      }
  
  
    }
  }
  
  
  
  
  
  function getUniqueValues() {
    //     var spreadSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
  
    //   var ss = SpreadsheetApp.openById(spreadSheetID);
    //   // var ss = SpreadsheetApp.openById(spreadSheetID).getSheets()
    //   var sheet = ss.getSheetByName("COMPANY_INFORMATION");
  
    //   // Replace 'A' with the column you want to get unique values from.
    //   var column = sheet.getRange(2,2,sheet.getLastRow()).getValues();
  
    //   // Create an empty object to store unique values.
    //   var uniqueValues = {};
  
    //   // Iterate through each value in the column.
    //   for (var i = 0; i < column.length; i++) {
    //     var value = column[i][0];
    //     if (value !== undefined && value !== "") {
    //       uniqueValues[value] = true;
    //     }
    //   }
  
    //   // Get the unique values as an array.
    //   var uniqueArray = Object.keys(uniqueValues);
    // console.log(uniqueArray)
    //   // Return the unique values.
    //   return uniqueArray;
  
  
    const sourceSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
    const ss = SpreadsheetApp.openById(sourceSheetID);
    const sheets = ss.getSheets();
  
    const targetSheetID = "1zyJxinQv31lPlP_QUQdsgOrSyfJBC33Loix_AZeXXDE";
    const ts = SpreadsheetApp.openById(targetSheetID);
    const sheets_ts = ts.getSheets();
  
    for (var i = 0; i < sheets.length; i++) {
      var sourceSheet = sheets[i];
      const sh_name = sourceSheet.getName();
      console.log(sh_name);
  
      // Find the corresponding target sheet by name
      var targetSheet = null;
      for (var j = 0; j < sheets_ts.length; j++) {
        if (sheets_ts[j].getName() === sh_name) {
          targetSheet = sheets_ts[j];
          break;
        }
      }
  
      if (!targetSheet) {
        Logger.log("Target sheet not found for: " + sh_name);
        continue; // Skip to the next source sheet
      }
  
      let headers = sourceSheet.getRange(1, 1, sourceSheet.getLastColumn()).getValues()
  
      headers.map((header) => {
  
  
  
      let no_of_columns = sourceSheet.getLastColumn()
  
  
      // Get the data range in the source sheet that you want to transpose
      var sourceDataRange = sourceSheet.getRange(1, headers.indexOf(header)+1, sourceSheet.getLastRow()+1000 - 1); // Change this range to your specific columns
  
      // Get the values from the selected data range
      var column = sourceDataRange.getValues();
      console.log(column)
  
  
  
      // Create an empty object to store unique values.
      let uniqueValues = {};
  
      // Iterate through each value in the column.
      for (var i = 1; i < column.length; i++) {
        var value = column[i][0];
        if (value !== undefined && value !== "") {
          uniqueValues[value] = true;
        }
      }
  
      // Get the unique values as an array.
      var uniqueArray = Object.keys(uniqueValues);
  console.log("uniqueArray",uniqueArray)
  
  
  
  
      // console.log(values)
      // transposedData[0].push('timeStamp')
     
  console.log("uniqueArray",uniqueArray)
      // Get the target row in the target sheet where you want to paste the transposed data
      // var targetRow = targetSheet.getRange(1,headers.indexOf(header)+1, uniqueArray.length,1); // Change this to your desired target row
      // console.log(targetRow)
      // // var targetRow_clear = targetSheet.getRange(1, 2, 1, targetSheet.getLastColumn()); // Change this to your desired target row
      // // targetRow_clear.clearContent();
      // // Set the values in the target row in the target sheet
      // targetRow.setValues(uniqueArray);
  
       })
    }
  
  
  
  
  
  
  
  
  }
  
  
  
  
  function getUniqueRecordsSelect(form="ITEM_MASTER", columnName ={Item_Group:6,UOM:7,Item_Material:8}) {
    var uniqueValues = [];
      var dropdowns = {};
    var ColKeys = Object.keys(columnName)
    ColKeys.map((cl) => {
      var spreadSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
  
      var ss = SpreadsheetApp.openById(spreadSheetID);
      // var ss = SpreadsheetApp.openById(spreadSheetID).getSheets()
      var sheet = ss.getSheetByName(form);
  
      // Replace 'A' with the column you want to get unique values from.
      var column = sheet.getRange(2, columnName[cl], sheet.getLastRow()).getValues();
  
      // Create an empty object to store unique values.
  
      // Iterate through each value in the column.
      for (var i = 0; i < column.length; i++) {
        var value = column[i][0];
        if (value !== undefined && value !== "") {
          uniqueValues[value] = true;
        }
      }
  
      // Get the unique values as an array.
      var uniqueArray = Object.keys(uniqueValues);
      dropdowns[cl] = uniqueArray
   uniqueValues = []
    });
    // Return the unique values.
    console.log(dropdowns)
    return dropdowns;
  }
  
  
  
  
  function getUniqueRecordsSelectData(data={"ITEM_MASTER":["Item_Group","UOM","Item_Material"]}) {
    var uniqueValues = [];
    var dropdowns = {};
    var sheetNames = Object.keys(data);
    sheetNames.map((sh) => {
      var spreadSheetID = "1HzTapPUdISUKfjzudW9PAiIJAQ3iYpUylWngSyIyeNw";
  dropdowns[sh]={}
      var ss = SpreadsheetApp.openById(spreadSheetID);
      // var ss = SpreadsheetApp.openById(spreadSheetID).getSheets()
      var sheet = ss.getSheetByName(sh);
  
  
  // var headers = sheet
  // .getRange(1, 1, 1,sheet.getLastColumn())
  // .getValues()[0];
  var headers = data[sh]
  
  headers.map((header)=>{
    // console.log(header)
  
        // Replace 'A' with the column you want to get unique values from.
        var column = sheet
        .getRange(2, headers.indexOf(header)+1, sheet.getLastRow())
        .getValues();
  
        for (var i = 0; i < column.length; i++) {
          var value = column[i][0];
          if (value !== undefined && value !== "") {
            uniqueValues[value] = true;
          }
        }
  
            // Create an empty object to store unique values.
  
      // Iterate through each value in the column.
  
  
      // Get the unique values as an array.
      var uniqueArray = Object.keys(uniqueValues);
      // console.log(uniqueArray)
      dropdowns[sh][header] = uniqueArray;
      uniqueValues = [];
  
  })
  
  
    });
    // Return the unique values.
    // console.log(dropdowns);
    return dropdowns;
  }
  
  
  function getSelectColumnsNSheets() {
  
    let output = {}
  
    let fileId = "1XLuVuXpCEgetdNngwvK1C2UX5lo-G7P5";
    let file = DriveApp.getFileById(fileId).getBlob().getDataAsString();
    console.log("getMetaData");
    file =JSON.parse(file)
  // console.log(file)
    let F_data= []
  
    keys = Object.keys(file)
    console.log(keys)
  keys.map((key)=>{
    let filtered_data = file[key].metaData.filter((r)=>r.select===true)
    F_data.push(filtered_data)
    // console.log(F_data)
  }
  )
  F_data.map((d)=>{
    let temp = []
    if(d.length>0){
  
      d.map((k)=>{
  temp.push(k.label)
  console.log(k.sheetname)
      })
  
  output[d[0].sheetname] = temp
    }
  })
  console.log(output)
    return output;
  
  }
  
  function removeCopyOfPrefix() {
    // Specify the folder ID where you want to rename files
    var folderId = '1jSMzo-R1AyE7Mj3tTOh_PEJTHg8OYNr8';
  
    // Get the folder by ID
    var folder = DriveApp.getFolderById(folderId);
  
    // Get all files in the folder
    var files = folder.getFiles();
  
    // Iterate through each file
    while (files.hasNext()) {
      var file = files.next();
      
      // Get the current filename
      var currentName = file.getName();
      
      // Check if the filename starts with 'Copy of '
      if (currentName.indexOf('Copy of ') === 0) {
        // Remove the 'Copy of ' prefix
        var newName = currentName.substring('Copy of '.length);
        
        // Rename the file
        file.setName(newName);
        
        // Log the renaming action (optional)
        Logger.log('Renamed file: ' + currentName + ' to ' + newName);
      }
    }
  }
  
  
  function copyAndRenameFiles() {
    // Specify the source and destination folder IDs
    var sourceFolderId = '1vOwYX73j_6apMFa0j5W4D5dpNTeub-RJ';
    var destinationFolderId = '11NOnTVtdrHgpsz6QCvvEBH7xUUalGukx';
  
    // Get the source and destination folders by ID
    var sourceFolder = DriveApp.getFolderById(sourceFolderId);
    var destinationFolder = DriveApp.getFolderById(destinationFolderId);
  
    // Get all files in the source folder
    var files = sourceFolder.getFiles();
  
    // Iterate through each file
    while (files.hasNext()) {
      var file = files.next();
  
      // Copy the file to the destination folder
      var copiedFile = file.makeCopy(file.getName(), destinationFolder);
  
      // Perform the renaming action on the copied file
      var currentName = copiedFile.getName();
  
      // Check if the filename starts with 'Copy of '
      if (currentName.indexOf('Copy of ') === 0) {
        // Remove the 'Copy of ' prefix
        var newName = currentName.substring('Copy of '.length);
  
        // Rename the file
        copiedFile.setName(newName);
  
        // Log the renaming action (optional)
        Logger.log('Renamed file: ' + currentName + ' to ' + newName);
      }
    }
  }
  
  
  