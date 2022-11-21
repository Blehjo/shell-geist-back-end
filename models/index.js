const UserProfile = require('./UserProfile');
const UserPost = require('./UserPost');
const Friendship = require('./Friendship');
const PostComment = require('./PostComment');
const PostLike = require('./PostLike');

UserProfile.hasMany(UserPost, {
    foreignKey: 'userprofile_id',
    onDelete: 'CASCADE'
})

UserPost.belongsTo(UserProfile, {
    foreignKey: 'userprofile_id'
})

UserProfile.hasMany(PostLike, {
    foreignKey: 'userprofile_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserProfile, {
    foreignKey: 'userprofile_id'
})

UserProfile.hasMany(Friendship, {
    foreignKey: 'userprofile_id',
    onDelete: 'CASCADE'
})

Friendship.belongsTo(UserProfile, {
    foreignKey: 'userprofile_id'
})

UserProfile.hasMany(PostComment, {
    foreignKey: 'userprofile_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(UserProfile, {
    foreignKey: 'userprofile_id'
})

UserPost.hasMany(PostLike, {
    foreignKey: 'userpost_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserPost, {
    foreignKey: 'userpost_id'
})

PostLike.hasMany(PostComment, {
    foreignKey: 'postlike_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(PostLike, {
    foreignKey: 'postlike_id'
})

module.exports = { UserProfile, UserPost, Friendship, PostComment, PostLike };