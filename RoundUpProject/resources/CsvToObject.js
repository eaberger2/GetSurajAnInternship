<<<<<<< HEAD
var fs = require('fs');
var csv = require('jquery-csv');
const sample = './companies.csv';
const map1 = new Map();
map1.set("Hello", 123)
console.log(map1.size)
console.log(map1.get("Hello"))

// fs.readFile(sample, 'UTF-8', function (err, csv) {
//     if (err) { console.log(err); }
//     csv.toArrays(csv, {}, function (err, data) {
//       if (err) { console.log(err); }
//       for (var i = 0, len = data.length; i < len; i++) {
//         console.log(data[i]);
//       }
//     });
//   });
testName = "bob"
const myArray = [];
const myArray2 = [];
fs.readFile(sample, 'UTF-8', (err, fileContent) => {
  if (err) { console.log(err); }
  csv.toObjects(fileContent, {}, (err, data) => {
    if (err) { console.log(err); }
    for (let i = 0, len = data.length; i < len; i++) {
        map1.set(data[i].name, data[i].market)
        // console.log(data[i])
        // testName = data[0].name
        // myArray.push(testName)
    //    myArray2.push(data[i].market)
    }
    console.log("map size after loop:" + map1.size)
  });
});

// for (let k = 0, len = myArray.length; k < len; k++) {
//     map1.set(myArray, myArray2)
// }
// console.log(map1.has(data[1].name))
map1.set(testName, 000)
console.log("map1 size: " + map1.size)
console.log("myArray length:" + myArray.length)
=======
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
>>>>>>> 1dc316e2813aabc33f353cd96e85b225457746d9