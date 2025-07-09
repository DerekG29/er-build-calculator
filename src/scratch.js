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

function getTables() {
  const tables = document.getElementsByClassName("wikitable");
  return tables;
}

function getTableValues(table) {
  const values = {
    baseAR: 0,
    splitAR: {
      fire: 0,
      lightning: 0,
      holy: 0,
      magic: 0,
    },
    scaling: {
      str: ["-", 0.0],
      dex: ["-", 0.0],
      int: ["-", 0.0],
      fai: ["-", 0.0],
      arc: ["-", 0.0],
    },
    passive: {
      type: "-",
      base: 0,
    },
    guardBoost: 0,
    upgrades: {
      AR: 0.0,
      str: 0.0,
      dex: 0.0,
      int: 0.0,
      fai: 0.0,
      arc: 0.0,
      passive: 0.0,
      guard: 0.0,
    },
  };

  const tBody = table.children[0];
  const rowA = tBody.children[1]; // base damage & stat scaling
  const rowB = tBody.children[2]; // split damage
  const rowC = tBody.children[3]; // upgrade scaling

  // getting base damage
  values.baseAR = parseInt(rowA.children[1].textContent);

  // getting scaling letters and values
  let key = ["str", "dex", "int", "fai", "arc"];

  for (let i = 2; i < 7; i++) {
    let data = rowA.children[i].textContent;
    if (data.length > 2) {
      let [letter, value] = data.split("\n");
      values.scaling[key[i - 2]] = [letter, parseFloat(value)];
    }
  }

  // getting split damage numbers and type
  key = {
    "cyan": "magic",
    "orange": "holy",
    "yellow": "lightning",
    "red": "fire",
  }

  const td = rowB.children[0];
  const splitDamage = td.textContent.match(/[0-9]+/gm);

  const colors = [];

  if (!(splitDamage.length == 1 && splitDamage[0] == 0)) {
    for (let child of td.children) {
      const color = child.getAttribute("style").slice(6, -1);
      colors.push(color);
    }
  }

  for (let i = 0; i < colors.length; i++) {
    const type = key[colors[i]];
    values.splitAR[type] = parseInt(splitDamage[i]);
  }

  // upgrade scaling



  // tests
  console.log(values.baseAR);
  console.log(values.splitAR);
  console.log(values.scaling);
}