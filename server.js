var express = require('express')
var path = require('path')
var ejs = require('ejs')
var tempstats = require('./db.js')
var app = express()

// File and View information
app.set('views', path.resolve(__dirname, "views"))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)


// Not sure what function this performs...
app.use(function(req, res, next) {
    res.locals.userAgent = req.headers['user-agent']
    next()
});


// All general page links should be listed below
app.get("/", function(request, response) {
    response.render("index", {});
});

app.get("/index", function(request, response) {
    response.render("index", {
        page_name: 'index'
    })
})

app.get('/news', function(req, res) {
    res.render('index-news'), {
        page_name: 'news'
    }
})

app.get('/projects', function(req, res) {
    res.render('index-projects'), {
        page_name: 'projects'
    }
})

app.get('/headoffice', function(req, res) {
    res.render('index-headoffice'), {
        page_name: 'headoffice'
    }
})

app.get('/missions', function(req, res) {
    res.render('index-missions'), {
        page_name: 'misssions'
    }
})

app.get('/research', function(req, res) {
    res.render('index-research'), {
        page_name: 'research'
    }
})

app.get('/about', function(req, res) {
    res.render('index-about', {
        page_name: 'about'
    })
})

// Json testing sendfile is different to sendFile
app.get('/view', function(req, res) {
    res.sendfile('./test.json', {})
})

// 4xx Errors are served from here
app.use(function(req, res) {
    res.status(404)
    res.render('404.html', {
        urlAttempted: req.url
    })
})

// SQL data interaction functions from db.js
app.get('/currentTemp', function(req, res) {
    res.send(tempstats.currentTemp + '')
})
app.get('/selectedTemp', function(req, res) {
    res.send(tempstats.selectedTemp + '')
})

// Server listen code
var port = 3000
app.listen(port, function() {
    console.log('The server is listening on port ' + port)
})