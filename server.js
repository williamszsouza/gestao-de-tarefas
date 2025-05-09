import mysql from 'mysql2'

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'tasks',
});

db.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('conected')
})

export default db