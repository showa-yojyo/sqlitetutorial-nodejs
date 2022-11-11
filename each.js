const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/chinook.db');

const sql = `
SELECT FirstName firstName,
LastName lastName,
Email email
FROM customers
WHERE Country = ?
ORDER BY FirstName
`;

db.each(sql, ['USA'], (err, row) => {
    if (err) {
        throw err;
    }
    console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
});

// close the database connection
db.close();
