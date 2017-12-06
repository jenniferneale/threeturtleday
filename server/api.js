'use strict'
const api = require('express').Router();
const { db } = require('./db');
const { Blogpost } = require('./db/blogpost.js');

api.get('/posts', (req, res, next) => {
    Blogpost.findAll({ include: [{ all: true }] })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/posts/:id', (req, res, next) => {
    Blogpost.findOne({
        where: { id: req.params.id },
        include: [{ all: true }]
    })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.post('/posts', (req, res, next) => {
    Blogpost.create({
        name: req.body.name,
        email: req.body.email
    }).then(result => res.status(201).send(result))
        .catch(console.error);
})

api.put('/posts/:id', (req, res, next) => {
    Blogpost.update({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status,
        campusId: req.body.campusId
    },
        { where: { id: req.params.id } })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.delete('/posts/:id', (req, res, next) => {
    Blogpost.destroy({
        where: { id: req.params.id }        
    })
        .then(() => res.status(200).send(req.params.id))
        .catch(console.error);
})

module.exports = api