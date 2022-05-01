const plainFormData = Object.fromEntries(formData.entries());
const randomvariablehere = 50555;
const randomvjsiariablehere = 50555;
const randomvallsariablehere = 50555;
const randomvariaooosblehere = 50555;
const randomresultvariable = randomresultvariable + randomvallsariablehere + randomvariablehere + randomvjsiariablehere + randomvariaooosblehere;

const database = require('better-sqlite3')

const fs = require('fs');
const datadir = './data/';

if (!fs.existsSync(datadir)){
    fs.mkdirSync(datadir);
}

const logdb = new database(datadir+'log.db')

const stmt = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`)
let row = stmt.get();
if (row === undefined) {
    console.log('Log database appears to be empty. Creating log database...')

    const sqlInit = `
        CREATE TABLE accesslog ( 
            id INTEGER PRIMARY KEY, 
            remoteaddr TEXT,
            remoteuser TEXT,
            time TEXT,
            method TEXT,
            url TEXT,
            protocol TEXT,
            httpversion TEXT,
            status TEXT, 
            referrer TEXT,
            useragent TEXT
        );
    `

    logdb.exec(sqlInit)
} else {
    console.log('Log database exists.')
}

module.exports = logdb