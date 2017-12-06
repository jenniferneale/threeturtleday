const Sequelize = require('sequelize');
const db = require('./index');
const { Blogpost } = require('./blogpost');

db.sync({ force: true })
    .then(() => {
        Blogpost.bulkCreate([
            { name: 'Terra', image: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' },
            { name: 'Luna', image: 'moon-2092807_1280.jpg' },
            { name: 'Mars', image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Crossing_the_Aqueduct._-_geograph.org.uk_-_31580.jpg' },
            { name: 'Titan', image: 'http://i.telegraph.co.uk/multimedia/archive/01107/aquarium_1107958i.jpg' }
        ]);
    })
    /*.then(() => {
        db.close();
        return null;
    })*/.catch(console.error);