const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/chinook.db');

const sql = `
SELECT PlaylistId id,
Name name
FROM playlists
WHERE PlaylistId = ?
`;

// If you change the playlistId to 0 and execute the get.js program...
let playlistId = 1;
// playlistId = 0;

// first row only
db.get(sql, [playlistId], (err, row) => {
    if (err) {
        return console.error(err.message);
    }
    return row
        ? console.log(row.id, row.name)
        : console.log(`No playlist found with the id ${playlistId}`);

});

// close the database connection
db.close();
