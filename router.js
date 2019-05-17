'use strict'

// This file is temporarily disabled.

// This file will handle all the routing for the server
var express = require('express')
var router = express.Router()
var http = require('http')
var path = require('path')
var tempstats = require('./db.js')

// Not sure if needed on server.js
router.use(express.urlencoded())
router.use(express.json())

router.get('/currentTemp', function(req, res) {
  res.send(tempstats.currentTemp+'')
})
router.get('/selectedTemp', function(req, res) {
  res.send(tempstats.selectedTemp+'')
})
router.get('/view', function(req, res) {
  res.sendJson('/test.json')
  console.log('/test.json')
})

module.exports = router
