const {Client} = require('pg')

const client = new Client({
    host: "my-db-instance.chy9kvkccmc4.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "initial_db"
})

client.connect((err) => {
    //Checks if the connection is successful
    if (err) {
      console.error('connection error', err.stack)
      client.end();
    } else {
      // Since the client connects to the database now you can read the database
      console.log('connected')

      //Printing out the value of the table in the console
      client.query('SELECT * FROM account', (err, res) => {
        if (err){
            console.log(err.message);
            client.end();
        }else{
            console.table(res.rows);
        }
        
        //Inserting the specified account value into the database
        /*client.query('insert into account values ($1, $2)', [200, 'Stewart'], (err, res) => {
            if (err){
                console.log(err.message);
                client.end();
            }else{
                console.table(res.rows);
            }
        })*/


    });

    }
  })


