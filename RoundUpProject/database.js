const {Client} = require('pg')

const client = new Client({
    host: "my-db-instance.chy9kvkccmc4.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "initial_db"
})


execute()

async function execute(){
    try{
        await client.connect()
        console.log("Connected successfully.")
        await client.query("insert into accounts values (1, 'John', 200, 'Food')")

        const {rows} = await client.query("select * from accounts")

        console.table(rows)
    }catch (ex){
        console.log(`Something wrong happened ${ex}`)
    }finally{
        await client.end()
        console.log("Client disconnected successfully.")
    }
}
