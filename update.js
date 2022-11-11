const sqlite3 = require('sqlite3').verbose();

// open a database connection
let db = new sqlite3.Database('./db/sample.db');

const data = ['Ansi C', 'C'];
const sql = `
UPDATE langs
SET name = ?
WHERE name = ?`;

db.run(sql, data, function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);

});

// close the database connection
db.close();
