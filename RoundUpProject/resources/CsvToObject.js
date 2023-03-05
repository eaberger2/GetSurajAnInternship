var fs = require('fs');
var csv = require('jquery-csv');
const sample = './companies1.csv';
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
        map1.set(data[i].Name, data[i].Sector)
    }

    console.log("finished loop:" + map1.size)
    resolve(map1)
    reject("fuckme")

  });
});
});


p.then((map1) => {
    console.log("passed")
    console.log(map1.get('Aflac'))
    console.log(map1.size)
});

