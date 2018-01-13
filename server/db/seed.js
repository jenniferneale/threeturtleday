const Sequelize = require('sequelize');
const db = require('./index');
const { Blogpost } = require('./blogpost');

db.sync({ force: true })
    .then(() => {
        Blogpost.bulkCreate([
            { title: 'Testy', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy2', teaserText: 'Some teaser text like whoah brah' }, 
            { title: 'Testy3', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy4', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' },      
        ]);
    })
    /*.then(() => {
        db.close();
        return null;
    })*/.catch(console.error);