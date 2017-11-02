'use strict'

var fs = require('fs')
var path = require('path')

var mongoose = require('mongoose')

mongoose.Promise = global.Promise
var db = mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

fs
.readdirSync(__dirname)
.filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
})
.forEach(function (file) {
    var model = require(path.join(__dirname, file));
    exports[model.modelName] = model
})
