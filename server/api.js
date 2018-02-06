'use strict'
const api = require('express').Router();
const { db } = require('./db');
const { BlogPost, Tag } = require('./db/models');

api.get('/posts', (req, res, next) => {
    BlogPost.findAll({ include: [{ all: true }], order: [['originalDate', 'DESC']] })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/posts/tags', (req, res, next) => {
    BlogPost.findAll({ include: [{ all: true }], order: [['originalDate', 'DESC']] })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/posts/:id', (req, res, next) => {
    BlogPost.findOne({
        where: { id: req.params.id },
        include: [{ all: true }]
    })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

/*api.post('/posts', (req, res, next) => {
    BlogPost.create({
        name: req.body.name,
        email: req.body.email
    }).then(result => res.status(201).send(result))
        .catch(console.error);
})

api.put('/posts/:id', (req, res, next) => {
    BlogPost.update({
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
    BlogPost.destroy({
        where: { id: req.params.id }        
    })
        .then(() => res.status(200).send(req.params.id))
        .catch(console.error);
})*/

module.exports = api