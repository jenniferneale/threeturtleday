'use strict'
const api = require('express').Router();

//INSERT HTTP REQUESTS HERE
api.get('/', (req, res, next) => {
    res.send({ hello: 'world' })
})

api.get('/posts', (req, res, next) => {

    res.send({ hello: 'posts' })
})

api.get('/posts/:id', (req, res, next) => {
    res.send({ hello: 'post' })
})

module.exports = api