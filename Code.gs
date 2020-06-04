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


//
//
//
//
// That's it
//
//
//
// Next few functions are needed to run launch the form
//
//
//
//
// for selected menu
function showPage_() {
  var sets = getHtmlFormSettings_();
  var html = HtmlService.createTemplateFromFile('select-page').evaluate().setTitle(sets.formName);
  SpreadsheetApp.getUi().showSidebar(html);  
}
//
// for the form work like a template
function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
};
//
// fot the form to have data from sheet
function getDataForCustomHtmlForm()
{
  var sets = getHtmlFormSettings_();
  var data = {
    values: getDatatForHtmpFormSelect_(),
    header: sets.listName,
    listHeight: sets.listHeight
  }
  return data;  
}