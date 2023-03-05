const fs = require('fs');
import { parse } from '@vanillaes/csv'
function test (){
fs.readFile('./companies.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const rows = data.split('\n');
  const headers = rows[2].split(',');
  const obj = {};

  for (let i = 0; i < headers.length; i++) {
    obj[headers[i]] = null;
  }

  console.log(obj);
});
}



