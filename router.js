'use strict'

// This file will handle all the routing for the server

var express = require('express')
var router = express.Router()
var http = require('http')
var path = require('path')
var tempstats = require('./db.js')

router.use(express.urlencoded())
router.use(express.json())

var publicPath = path.resolve(__dirname, 'public')
router.use(express.static(publicPath))

router.use(function(req, res, next) {
  console.log(req.ip)
})

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.old.html')
  console.log("Access Detected!")
})

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

router.use(function(req, res) {
  res.statusCode = 404
  res.end("404!!")
})

module.exports = router
