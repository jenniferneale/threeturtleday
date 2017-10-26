'use strict'
const api = require('express').Router();

//INSERT HTTP REQUESTS HERE
api.get('/', (req, res, next) => {
    res.send({ hello: 'world' })
})

module.exports = api