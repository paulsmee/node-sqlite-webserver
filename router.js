'use strict'

// This file will handle all the routing for the server

var express = require('express')
var router = express.Router()
var tempstats = require('./db.js')

router.use(express.urlencoded())
router.use(express.json())

router.get('/', function(req, res) {
  res.sendFile('/index.html')
  console.log("Access Detected!")
})

router.get('/view', function(req, res) {
  res.send(tempstats.currentTemp+'')
})

module.exports = router
