const Sequelize = require('sequelize');
const db = require('./index');
const { Blogpost } = require('./blogpost');
const blogArchive = require('./seed-archive');

let b1 = 
db.sync({ force: true })
    .then(() => {
        Blogpost.bulkCreate([
            {
                title: 'Global Kitchen',
                originalDate: '26 January 2018',
                cardImage: 'images/global-kitchen.jpg',
                teaserText: 'A cute and educational restaurant simulator game.',
                body: blogArchive.b25GlobalKitchen,
            },
            {
                title: 'Frankenstein v. The Vampires',
                originalDate: '24 January 2018',
                cardImage: 'images/FrankCloseup.jpg',
                body: blogArchive.b24Frank
            },            
            {
                title: 'He Fell in Love with Time',
                originalDate: '24 July 2015',
                cardImage: 'images/dandelion.jpg',
                teaserText: 'When he was young, Time walked slowly with him, stubbornly making time for him even when he pushed her, telling her to hurry up.',
                body: blogArchive.b19Time
            },
            {
                title: 'A Library in Prague',
                originalDate: '5 April 2014',
                teaserText: 'The library remained open, though truth be told, after the roof caved in, the pages were becoming quite moldy.',
                body: blogArchive.b18Library
            },
            {
                title: 'On Blindness',
                originalDate: '5 March 2014',
                teaserText: 'I drove past my elementary school today and realized I\'d never been there before.',
                body: blogArchive.b17Blindness
            },
            {
                title: 'Hipster Leaf',
                originalDate: '5 March 2014',
                teaserText: 'A leaf falls off a tree. Maybe it\'s homesick. Maybe it figures it\'s better off.',
                cardImage: 'images/leaf.jpg',
                body: blogArchive.b16HipsterLeaf
            },
            {
                title: 'Long-Distance Relationships',
                originalDate: '5 March 2014',
                teaserText: "\"Margviv'ai wowikle burlssnife NASA?\" \"Floogle, your translator.\" \"Ieigoi? Wied! ...Sorry about that, NASA.\"",
                body: blogArchive.b15LongDistance
            },
            {
                title: 'Bigger Fish Realty',
                originalDate: '5 March 2014',
                teaserText: 'So I manage to slide maybe five feet into the chimney before it slopes towards the fireplace below, and after twisting my hips and kicking my feet a little, I realize I\'m not going to fall conveniently into the hearth.',
                body: blogArchive.b14BiggerFish
            },
            {
                title: 'Escape from Melbourne',
                originalDate: '5 March 2014',
                teaserText: 'Charlie had made it past bag check, and had presented his driver\'s license to the smiling security woman when he noticed a chill against his shin, and looked down in time to see water drip from his lower cargo pant pocket onto his sandaled foot.',
                body: blogArchive.b13EscapefromMelbourne
            },
            {
                title: 'Disk Analysis Program',
                originalDate: '14 February 2014',
                teaserText: 'A friend wanted a little tool to help clean up his hard drive, so I threw together this little thing very quickly, which shows how much space various files and folders take up in the folder you\'ve specified.',
                cardImage: 'images/DiskAnalysisScreenCap.jpg',
                body: blogArchive.b12DiskAnalysis
            },
            {
                title: 'Comic: Ushers of the Dark Theater',
                originalDate: '9 January 2014',
                cardImage: 'images/Blog23JFNealeUshersComic1-small.jpg',
                teaserText: 'Oh no! The Doctor\'s enemies: the Frolics!',
                body: blogArchive.b11Doctor,
            },
            {
                title: 'Gaze Visualizer',
                originalDate: '1 December 2013',
                teaserText: 'Visualizing reading gaze data at the University of Notre Dame with C#',
                cardImage: 'images/GazeVizScreenshot.png',
                body: blogArchive.b22GazeViz,
            },
            {
                title: 'Comic: Super Chibi Chica Tita',
                originalDate: '1 December 2013',
                teaserText: 'Mild-mannered Margarita is curing diseases when...',
                cardImage: 'images/Blog22SuperChibiChicaTita-small.jpg',
                body: blogArchive.b10SuperChibiChicaTita
            },
            {
                title: 'The Stone Rolled Back Where You Sleep',
                originalDate: '22 August 2013',
                teaserText: 'A poem about grief.',
                cardImage: 'images/dog.jpg',
                body: blogArchive.b9Stone
            },
            {
                title: 'The Optimist\'s Prayerbook',
                originalDate: '30 July 2013',
                teaserText: "Includes prayers \"Dear Me,\" \"Dear Mom,\" \"The Ambassador of Awesome,\" and \"I'm Really Sorry.\"",
                body: blogArchive.b8Prayers
            },
            {
                title: 'Easter Bunny Flute',
                originalDate: '1 April 2013',
                cardImage: 'images/Blog16Buffalo.jpg',
                body: blogArchive.b7Buffalo
            },
            { title: 'Append Columns Software', 
                teaserText: 'Just a little something I threw together to help a friend. This program allows you quickly and easily add columns from multiple files to a base file, and match the data appropriately.',
                cardImage: 'images/AppendColumns.jpg',
                originalDate: "29 January 2013",
                body: blogArchive.b6AppendColumns 
            }, 
            { title: 'Misplaced Puzzle',
             teaserText: 'I\'m looking for the labyrinth.',
                originalDate: "17 January 2013",
                body: blogArchive.b5Labyrinth
            }, 
            { title: 'What I Know About Organic Chemistry', 
                cardImage: 'images/Lemongrass_Orzo_Salad_1.jpg',
                originalDate: "29 November 2012",
                body: blogArchive.b4Orgo
             }, 
            { title: 'The Seafaring Exploits of Raegar the Something-or-Other',
             teaserText: 'Raegar was not a very good pirate...', 
             originalDate: "13 September 2012",
             body: blogArchive.b3Raegar
              }, 
            { title: 'A Synopsis', cardImage: 'images/pumpkinteeth.jpg',
                teaserText: 'Onion grows up happily in the deep, damp earth, feeling the heat of the sun warming the soil over his head, like a toasty hat.',
                originalDate: "13 September 2012",
                body: blogArchive.b2Onion
            }, 
            { title: 'A Melodramatic Cactus', 
                teaserText: 'Once upon a time there was a cactus named Fred.',              
               body: blogArchive.b1Cactus, 
               originalDate: new Date("13 September 2012")
            },
            {
                title: 'What Hands Are For',
                teaserText: 'A romantic short story in which Eiji joins the military and hopes his boyfriend will wait for him.',
                originalDate: '15 May 2011',
                cardImage: 'images/DinosaurJFNealesmall.jpg',
                body: blogArchive.b20Hands,
            },
            {
                title: 'Flowers',
                teaserText: 'In which a boy makes a wish.',
                originalDate: '15 May 2011',
                cardImage: 'images/dandelion.jpg',
                body: blogArchive.b21Flowers,
            },
            {
                title: 'Kittens: the Adventure',
                teaserText: 'Collect kittens for a dragon in this Java game.',
                originalDate: '15 May 2011',
                cardImage: 'images/KittenScreenshot.png',
                body: blogArchive.b23Kittens,
            },
        ]);
    })
    /*.then(() => {
        db.close();
        return null;
    })*/.catch(console.error);