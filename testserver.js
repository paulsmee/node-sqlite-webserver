
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('test.db');
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
app.use(express.json());

// // Access the parse results as request.body
// app.post('/', function(request, response){
//     console.log(request.body.user.firstName);
//     console.log(request.body.user.lastName);
//         db.run('INSERT INTO test2 VALUES (NULL, ?, ?, CURRENT_TIMESTAMP)', [request.body.user.firstName, request.body.user.lastName], function(err){
//         if(err){
//             console.log(" I'm going to cry, there's another error!" + err.message);
//         }
//         else{
//             console.log('Record successfully added with id: ' + this.lastID);
//             response.redirect('/');
//         } 
//     });
// });

app.get('/view', function(request, response){
    console.log("return quote with the ID: " + request.body.rowID.row);
    db.get('SELECT * FROM test WHERE ROWID IN ( SELECT max( ROWID ) FROM test)', function(err, row){
        if(err){
            console.log('Oh no!' + err.message);
        }
        else{
            console.log('It Works' + row);
            response.json(row);
        }
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/1.html');
  });

app.listen(3000, function(){
    console.log('Server is listening on Port 3000');
});