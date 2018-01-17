const Sequelize = require('sequelize');
const db = require('./index');
const { Blogpost } = require('./blogpost');
const blogArchive = require('./seed-archive');

let b1 = 
db.sync({ force: true })
    .then(() => {
        Blogpost.bulkCreate([
            { title: 'Testy', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy2', teaserText: 'Some teaser text like whoah brah' }, 
            { title: 'Testy3', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy4', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'A Synopsis', cardImage: 'images/pumpkinteeth.jpg',
                teaserText: 'Onion grows up happily in the deep, damp earth, feeling the heat of the sun warming the soil over his head, like a toasty hat.',
                originalDate: "13th September 2012"
            }, 
            { title: 'A Melodramatic Cactus', teaserText: 'Once upon a time there was a cactus named Fred.',              
               body: blogArchive.b1Cactus, originalDate: new Date("13 September 2012") },    
        ]);
    })
    /*.then(() => {
        db.close();
        return null;
    })*/.catch(console.error);