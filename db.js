'use strict'
var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('test.db')

const tempstats = {}

db.get('SELECT 2 AS id , temp FROM temps', function(err, row){
    if(err){
        console.log('Oh no!' + err.message);
    }
    else{
        console.log('Row ID: ' + row.id + " shows a temperature of: " + row.temp +"c")
        tempstats.currentTemp = row.temp;
    }
})

// db.get('SELECT * FROM temps WHERE date = DATETIME("now", "start of day", "localtime")', function(err, row){
//     if(err){
//         console.log('Oh no!' + err.message);
//     }
//     else{
//         console.log('Row ID: ' + row.id + " shows a temperature of: " + row.temp +"c")
//         tempstats.currentTemp = row.temp;
//     }
// })

module.exports = tempstats
