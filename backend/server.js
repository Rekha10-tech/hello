const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'work'
})

app.get('/', (req, res)=> {
return res.json("From backend side");
})
app.get('/branch', (req, res)=> {
    const sql="SELECT * FROM branch";
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.listen(8082, ()=> {
    console.log("listening on port 8082");
})