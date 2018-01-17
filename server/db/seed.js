const Sequelize = require('sequelize');
const db = require('./index');
const { Blogpost } = require('./blogpost');

let b1 = "<p>Once upon a time there was a cactus named Fred. Fred wanted to travel, to find adventure! But he didn't know where to start. So he packed up his bags and picked some flowers, and started walking.</p>" +
"<p>Do not apply your solvent to a clean sloth. He will not appreciate it. That is what the sign said. Fred was not sure he understood why he should wish to apply a solvent to a sloth. He actually did not know any sloths to apply solvent to, anyhow.</p>" +
"<p>What are you doing? Asked a turtle.</p>" +
"<p>I'm looking for adventure, said Fred. Is that a problem?</p>" +
"<p>Oh, no, said the turtle. I was just wondering.</p>" +
"<p>Oh, said Fred, it would have been nice to encounter a problem, maybe an exciting villain, like in stories. And Fred looked very sad indeed.</p>" +
"<p>What's wrong, asked the turtle.</p>" +
"<p>Fred explained, I am just a cactus. I have always been just a cactus. And I suppose I can't be anything but a cactus. But I think there is more to life than just photosynthesis. The stories say that there are dragons and unicorns and villains and romances. And pieces of toast with jam. I want to see these things myself.</p>" +
"<p>You are silly, said the turtle. Those things do not exist. You are wandering around for no reason.</p>" +
"<p>But Fred was determined. He knew the turtle was only a sad creature who had never seen a dragon. I will find an adventure! Said Fred. And you will not stop me!</p>" +
"<p>The turtle watched Fred walk away. Fred knew the turtle was watching him. I'll show him, Fred told himself. I'll prove he's wrong.</p>" +
"<p>He didn't know the turtle was following him.</p>" +
"<p>Fred thought about the turtle's way of thinking, and wondered how the turtle predicted Fred's story would end: The turtle's words of warning would haunt Fred. And as he continued searching, and finding only the same desert in different forms, the turtle's words would wear on Fred, until he began to wonder if they were true. One day Fred would stop walking, somewhere comfortable, but not really ideal. And he would tell himself he hated the place and needed to move on, but be unable to convince himself that it was worth the trouble to find something better. And he would come to believe that the turtle was probably right, that nothing in the world would really make his finite life exciting, because there were no dragons or unicorns or great romances or terrible villains that could be defeated with the power of goodness. And he might think about throwing himself from a cliff, or piercing himself on a rock, and he might even attempt to do these things, but he would be unable to go through with it, because he did not have the will to cause himself pain. And he would rationalize that life without adventure was still life, and he would go on living. But he would never be happy, no matter what he accomplished in this one little patch of desert. And one day he would die and that would be that.</p>" +
"<p>Maybe that's what life is, said Fred, feeling worried. Maybe my stories are lies to make me hope. But I don't know that either. I have to have faith in something- either in life's meaningfulness or meaninglessness. Hoping is probably happier than not hoping. But more importantly, I have to look for proof if I want to be sure. If I find proof, I'll be sure. If I don't find proof, I still won't be sure.</p>";

db.sync({ force: true })
    .then(() => {
        Blogpost.bulkCreate([
            { title: 'Testy', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy2', teaserText: 'Some teaser text like whoah brah' }, 
            { title: 'Testy3', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy4', teaserText: 'Some teaser text like whoah brah', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'Testy5', cardImage: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' }, 
            { title: 'A Melodramatic Cactus', teaserText: 'Once upon a time there was a cactus named Fred.',              
            body: b1 },    
        ]);
    })
    /*.then(() => {
        db.close();
        return null;
    })*/.catch(console.error);