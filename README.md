# HTML-form-with-list-Google-Script

Please test the Demo:

1.  Create a [copy of the sample file.](https://docs.google.com/spreadsheets/d/1nnSCJYGM6dcj-oy9iIQn-1Nr66pVcq1ngX3grnxucq4/copy)
2.  Go to menu 🙂 Click me > List of items with 🔎 search

Done!

Usage:

Let user to check one ore multiple items from list.

Change this part of code to your needs:

```js
// Welcome to the sample code: get data from sheet to HTML-form
//
//
// Modificatin points are:
//
// ==================================================================================================
// [ 1 ]. onOpen function. Creates custom user menu.
//        more: https://developers.google.com/apps-script/guides/menus
// ==================================================================================================
function onOpen() {
 var ui = SpreadsheetApp.getUi();
 // Or DocumentApp or FormApp.
 ui.createMenu('🙂 Click me')
     .addItem('List of items with 🔎 search', 'showPage_')
     .addToUi();
}


// ==================================================================================================
// [ 2 ]. getHtmlFormSettings_. The function keeps your HTML-form settings
// ==================================================================================================
function getHtmlFormSettings_()
{
 var sets =  
 {
   formName: 'Select an item', // this name will show at the top of your form
   listName: '', // this name will show the top of your list in form. Leave blank to skip list header  
   listHeight: 650 // the height list in pixels, default: 300px.
 };  
 return sets;
}


// ==================================================================================================
// [ 3 ]. getDatatForHtmpFormSelect_. This function gets the data for the list of items in HTML-form
//        Note. Modify this function to populate the list.  
//              It may be range, data from docs, slides, calendar, API, etc.
//        Output: 1d or 2d array of strings:  ['value1', 'value2']
// ==================================================================================================
function getDatatForHtmpFormSelect_()
{
 // data to fill the table. Change to any data
 var file = SpreadsheetApp.getActive();
 var sheet = file.getSheetByName('Sheet1');
 var range = sheet.getDataRange();
 var dataFromSheet = range.getValues();    
 return dataFromSheet;  
}


// ==================================================================================================
// [ 4 ]. responseToSelectForm. This function runs when user clicks "Submit" button
// ==================================================================================================
function responseToSelectForm(selected_items)
{
 var prompt = 'You selected: ' + selected_items.join(', ');
 Browser.msgBox(prompt);
}
```

See [more info in the post](https://sheetswithmaxmakhrov.wordpress.com/2020/06/04/script-magic-create-html-form-with-list-from-sheet-search-like-google/).
