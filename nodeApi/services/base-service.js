const fs = require("fs");
const path = require("path");
const util = require("util");
const idGenerator = require("../utils/id-generator");

const folderPath = path.join(__dirname, "..");
const dbFilePath = path.join(folderPath, "database/db.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const getAllJSONdataFromText = async () => {
  const allText = await readFileAsync(dbFilePath);
  const allData = JSON.parse(allText);
  return allData;
};

const createModel = async (model, tableKey) => {
    const allData = await getAllJSONdataFromText();
    const newData = { id: idGenerator(allData[tableKey]), ...model }; // Assuming 'model' is the new data
    allData[tableKey].push(newData);
    await writeAllJSONtoFile(allData);
    return newData;
  };
  

const writeAllJSONtoFile = async (allData) => {
  await writeFileAsync(dbFilePath, JSON.stringify(allData, null, 2));
};

module.exports = { getAllJSONdataFromText, createModel };
