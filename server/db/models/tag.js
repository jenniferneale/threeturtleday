'use strict';
const { STRING, TEXT, DATE, NOW } = require('sequelize');
const db = require('../db');

const Tag = db.define('tag', {
    name: STRING
  });

module.exports = Tag