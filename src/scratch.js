function getTableData(table) {
  const tableMatrix = {};
  let tableName;
  let lvl = 0;

  for (let i = 2; i < table.length; i++) {
    const rowArray = table[i].children;
    const rowData = [];

    if (i === 2) { tableName = rowArray[0].textContent }
    for (let j = 1; j < rowArray.length; j++) {
      const data = rowArray[j].textContent;

      if (data === "-") {
        rowData.push(0);
      } else {
        let parsed = parseInt(data);
        rowData.push(parsed ? parsed : data);
      }
    }

    tableMatrix[lvl] = rowData;

    lvl++
  }

  return { name: tableName, data: tableMatrix }
}

function logTables() {
  const filter = [
    "Blood", "Cold", "Fire", "Flame", "Heavy",
    "Keen", "Lightning", "Magic", "Occult",
    "Poison", "Quality", "Sacred", "Standard"
  ]

  const output = {};
  const tables = document.getElementsByClassName("wiki_table");

  for (let table of tables) {
    let result = getTableData(table.children[0].children);

    if (filter.includes(result.name)) {
      output[result.name] = result.data;
    }
  }

  console.log(output)
}