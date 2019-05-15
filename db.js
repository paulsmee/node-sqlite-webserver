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

db.get('SELECT * FROM temps WHERE date order by date desc limit 1', function(err, row){
    if(err){
        console.log('Oh no!' + err.message);
        return;
    }

    console.log(row)

    console.log('Row ID: ' + row._id + " shows a temperature of: " + row.temp +"c")
    tempstats.currentTemp = row.temp;

})

module.exports = tempstats
