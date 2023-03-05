const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const csvData = fs.readFileSync('companies.csv');
const records = parse(csvData, { columns: true });

const hashmap = {};
for (let i = 0; i < records.length; i++) {
  const record = records[i];
  const name = record.name;
  const category = record.category_list;
  const countryCode = record.country_code;
  hashmap[name] = { category, countryCode };
}

console.log(hashmap);
