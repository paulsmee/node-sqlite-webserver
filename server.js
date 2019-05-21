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

app.get('/astronomy', function(req, res) {
    res.render('index-astronomy'), {
        page_name: 'astronomy'
    }
})

app.get('/botany', function(req, res) {
    res.render('index-botany'), {
        page_name: 'botany'
    }
})

app.get('/home-automation', function(req, res) {
    res.render('index-automation'), {
        page_name: 'automation'
    }
})

app.get('/backyard-science', function(req, res) {
    res.render('index-science'), {
        page_name: 'science'
    }
})

app.get('/electronics', function(req, res) {
    res.render('index-electronics'), {
        page_name: 'electronics'
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