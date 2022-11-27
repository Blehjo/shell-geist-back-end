const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ChannelComment extends Model{ }

ChannelComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        channel_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'groupchannel',
                key: 'id'
            }
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            }
        },
        channel_comment_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_date_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'channelcomment',
    }
)

module.exports = ChannelComment;