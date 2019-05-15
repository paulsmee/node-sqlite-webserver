var express = require('express')
var path = require('path')
var ejs = require('ejs')

var app = express()

app.set('views', path.resolve(__dirname, "views"))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)

app.use(function(req, res, next) {
    res.locals.userAgent = req.headers['user-agent']
    next()
})

app.get("/", function(request, response) {
    response.render("index", {
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
    })
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

// Build projects
app.get('/projects', function(req, res) {
    res.render('projects')
})

// Science missions
app.get('/missions', function(req, res) {
    res.render('missions')
})

// Backyard Science
app.get('/backyardscience', function(req, res) {
    res.render('backyardscience')
})

// 4xx Errors are stored below
app.use(function(req, res) {
    res.status(404)
    res.render('404.html', {
        urlAttempted: req.url
    })
})

var port = 3000
app.listen(port, function(){
    console.log('The server is listening on port ' + port)
})