const UserProfile = require('./UserProfile');
const UserPost = require('./UserPost');
const Friendship = require('./Friendship');
const PostComment = require('./PostComment');
const PostLike = require('./PostLike');
const Group = require('./Group');
const GroupMember = require('./GroupMember');
const GroupChannel = require('./GroupChannel');
const Event = require('./Event');
const EventMember = require('./EventMember');
const ChannelComment = require('./ChannelComment');
const Conversation = require('./Conversation');
const ChatMember = require('./ChatMember');
const Game = require('./Game');
const Message = require('./Message');

UserProfile.hasMany(UserPost, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

UserPost.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(PostLike, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(Friendship, {
    foreignKey: 'profile_request',
    onDelete: 'CASCADE'
})

Friendship.belongsTo(UserProfile, {
    foreignKey: 'profile_request'
})

UserProfile.hasMany(Friendship, {
    foreignKey: 'profile_accept',
    onDelete: 'CASCADE'
})

Friendship.belongsTo(UserProfile, {
    foreignKey: 'profile_accept'
})

UserProfile.hasMany(PostComment, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(Group, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Group.belongsTo(UserProfile, {
    foreignKey: 'profile_id',
})

UserProfile.hasMany(Game, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Game.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

Group.hasMany(GroupChannel, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

GroupChannel.belongsTo(Group, {
    foreignKey: 'group_id'
})

GroupChannel.hasMany(ChannelComment, {
    foreignKey: 'channel_id',
    onDelete: 'CASCADE'
})

ChannelComment.belongsTo(GroupChannel, {
    foreignKey: 'channel_id'
})

UserProfile.hasMany(ChannelComment, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

ChannelComment.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(ChatMember, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

ChatMember.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

Conversation.hasMany(ChatMember, {
    foreignKey: 'conversation_id',
    onDelete: 'CASCADE'
})

ChatMember.belongsTo(Conversation, {
    foreignKey: 'conversation_id'
})

UserProfile.hasMany(GroupMember, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

GroupMember.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(Event, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Event.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

Group.hasMany(Event, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

Event.belongsTo(Group, {
    foreignKey: 'group_id'
})

Group.hasMany(GroupMember, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

GroupMember.belongsTo(Group, {
    foreignKey: 'group_id'
})

UserProfile.hasMany(EventMember, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

EventMember.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

Event.hasMany(EventMember, {
    foreignKey: 'event_id',
    onDelete: 'CASCADE'
})

EventMember.belongsTo(Event, {
    foreignKey: 'event_id'
})

UserPost.hasMany(PostLike, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserPost, {
    foreignKey: 'post_id'
})

UserPost.hasMany(PostComment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(UserPost, {
    foreignKey: 'post_id'
})

Conversation.hasMany(Message, {
    foreignKey: 'conversation_id',
    onDelete: 'CASCADE'
})

Message.belongsTo(Conversation, {
    foreignKey: 'conversation_id'
})

module.exports = { UserProfile, UserPost, Friendship, PostComment, PostLike, Group, Game, GroupChannel, ChannelComment, Message, GroupMember, Conversation, ChatMember, Event, EventMember };