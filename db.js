'use strict'

var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('test.db')

const tempstats = {}

db.get('SELECT * FROM temps WHERE rowid = 3', function(err, row){
    if(err){
        console.log('Oh no!' + err.message);
    }
    else{
        console.log('Row ID: ' + row._id + " shows a temperature of: " + row.temp +"c")
        tempstats.selectedTemp = row.temp;
    }
})

db.get('SELECT * FROM temps WHERE date = DATE("now")', function(err, row){
    if(err){
        console.log('Oh no!' + err.message);
    }
    else{
        console.log('Row ID: ' + row._id + " shows a temperature of: " + row.temp +"c")
        tempstats.currentTemp = row.temp;
    }
})

module.exports = tempstats
