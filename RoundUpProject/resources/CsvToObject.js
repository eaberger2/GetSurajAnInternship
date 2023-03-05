var fs = require('fs');
var csv = require('jquery-csv');
const sample = './companies.csv';
// const map1 = new Map();
// map1.set("Hello", 123)
// console.log(map1.size)
// console.log(map1.get("Hello"))


let p = new Promise ((resolve, reject) => { 
    const map1 = new Map()
fs.readFile(sample, 'UTF-8', (err, fileContent) => {
  if (err) { console.log(err); }

  csv.toObjects(fileContent, {}, (err, data) => {
    if (err) { console.log(err); }

    for (let i = 0, len = data.length; i < len; i++) {
        map1.set(data[i].name, data[i].market)
    }

    console.log("finished loop:" + map1.size)
    resolve(map1)
    reject("fuckme")

  });
});
});


p.then((map1) => {
    console.log("passed")
    console.log(map1.get('Club Domains'))
});
// getActivity()
// async function getActivity(){
//     var response = makeHashMap();
//     // console.log("map1 size: " + map1.size)
//     console.log(response.get("Club Domains"))
//     // console.log(map1.get("Club Domains"))
    // console.log(map1.has("Club Domains"))
// }
// console.log(map1.has("Club Domains"))


// awaitconsole.log(map1.get("McDonalds"))

// async function myAsyncFunction() {
//     let result = await myPromise();
//     console.log(result);
//   }
  
//   function myPromise() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Hello, world!");
//       }, 2000);
//     });
//   }
  
//   myAsyncFunction();

// testInput = './testInputTransactions.csv'
// fs.readFile(testInput, 'UTF-8', (err, fileContent) => {
//     if (err) { console.log(err); }
//     csv.toObjects(fileContent, {}, (err, data) => {
//         if (err) { console.log(err); }
//         for (let i = 0, len = data.length; i < len; i++) {
//             console.log(map1.get(data[i].name))
//         }
//     });
// });

// for (let k = 0, len = myArray.length; k < len; k++) {
//     map1.set(myArray, myArray2)
// }
// console.log(map1.has(data[1].name))

// =======
// const fs = require('fs');
// const parse = require('csv-parse/lib/sync');

// const csvData = fs.readFileSync('companies.csv');
// const records = parse(csvData, { columns: true });

// const hashmap = {};
// for (let i = 0; i < records.length; i++) {
//   const record = records[i];
//   const name = record.name;
//   const category = record.category_list;
//   const countryCode = record.country_code;
//   hashmap[name] = { category, countryCode };
// }

// console.log(hashmap);
// >>>>>>> 1dc316e2813aabc33f353cd96e85b225457746d9
