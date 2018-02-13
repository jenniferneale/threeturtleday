'use strict'
const Sequelize = require('sequelize');
const db = require('../index');
const { BlogPost, Tag } = require('../models');
const postData = require('./seed-objects');
const Promise = require('bluebird');

const tagData = [
        { name: "fiction" },
        { name: 'software' },
        { name: "comics" },
        { name: "games" }
    ]

async function seed(){
    await db.sync({ force: true })
    const tagObjects = toObject(await Promise.map(tagData, data => Tag.create(data)));
    const { fiction, software, comics, games } = tagObjects;
    const postDataWTags = postData(tagObjects);
    const blogs = toObject(await Promise.map(postDataWTags, element => BlogPost.create(element, {include: [ Tag ]})));    
}

Promise.resolve(seed())
.then(function () {
    console.log("Finished inserting data");
  })
  .catch(function (err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function () {
    db.close();
    console.log("connection closed");
    return null;
  });

function toObject (array) {
   return array.reduce(function(all, x){
    let feature = 'name';
    if(!x[feature]) feature = 'id';
    all[x[feature]] = x;
    return all
    }, {})
}