var csv = require('jquery-csv');
var fs = require('fs');
const sample = './companies.csv';
const map1 = new Map();
map1.set("Hello", 123)
console.log(map1.size)
console.log(map1.get("Hello"))

testName = ""
fs.readFile(sample, 'UTF-8', (err, fileContent) => {
  if (err) { console.log(err); }
  csv.toObjects(fileContent, {}, (err, data) => {
    if (err) { console.log(err); }
    // let myArray = [data.length];
    // let myArray2 = [data.length];
    for (let i = 0, len = data.length; i < len; i++) {
    //    myArray.push(data[i].name)
    //    myArray2.push(data[i].market)
    }
  });
});

// for (let k = 0, len = myArray.length; k++) {
//     map1.set(myArray, myArray2)
// }
// console.log(map1.has(data[1].name))
console.log(map1.size)
