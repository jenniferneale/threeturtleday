const BlogPost = require('./blogpost')
const Tag = require('./tag')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
/*User.hasMany(User, {foreignKey: 'sire', as: 'offspring'})
User.belongsTo(User, {foreignKey: 'sire'})*/
/*Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});*/
/*Teachables.belongsToMany(User, {through: 'userTeachables'} )
User.belongsToMany(Teachables, {through: 'userTeachables'} )
Orders.belongsTo(User, {as: 'buyer'} )
Transactions.belongsTo(User, {as: 'tutor'} )
Transactions.belongsTo(Teachables)
Transactions.belongsTo(Orders)
Orders.hasMany(Transactions)*/
Tag.belongsToMany(BlogPost, {through: 'postTags'})
//BlogPost.belongsToMany(Tag, {through: 'postTags'})
//Tag.hasMany(BlogPost)
BlogPost.hasMany(Tag)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  BlogPost, Tag
}
