const ss = SpreadsheetApp.getActiveSpreadsheet();

const searchWS = ss.getSheetByName("Search");
const pkmnInfoWS = ss.getSheetByName("Pokémon Info");
const pkmnSpriteWS = ss.getSheetByName("Sprite URLs - Pokémon");
const itemSpriteWS = ss.getSheetByName("Sprite URLs - Items");
const moveInfoWS = ss.getSheetByName("Move Information");

const dexNo = searchWS.getRange("C9");
const searchCell = searchWS.getRange("D2");

const fieldRange = ["C10", "C11", "E6", "F6", "G6", "E9", "F9", "G9", "H9", "I9", "E15", "E16", "E17", "E18", "E19", "E20", "E21", "E22", "C13", "C14", "B17"];

function search() {
  const searchValue = searchCell.getValue();
  const info = pkmnInfoWS.getRange("B2:X461").getValues();
  const infoFound = info.filter(r => r[22] == searchValue);

  dexNo.setValue(infoFound[0][0]);

  fieldRange.forEach((f,i) => searchWS.getRange(f).setValue(infoFound[0][i+1]));

}

function resetSearch() {
  fieldRange.forEach(f => searchWS.getRange(f).clearContent());
  dexNo.clearContent();
  searchCell.clearContent();

}
