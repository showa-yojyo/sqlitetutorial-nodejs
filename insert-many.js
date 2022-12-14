const sqlite3 = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('./db/sample.db');

const languages = ['C++', 'Python', 'Java', 'C#', 'Go'];

// construct the insert statement with multiple placeholders
// based on the number of rows
const placeholders = languages.map((language) => '(?)').join(',');
const sql = 'INSERT INTO langs(name) VALUES ' + placeholders;

// output the INSERT statement
console.log(sql);

db.run(sql, languages, function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
});

// close the database connection
db.close();
