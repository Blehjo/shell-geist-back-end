const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ChatMember extends Model{ }

ChatMember.init(
    {
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
        conversation_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'conversation',
                key: 'id'
            },
        },
        joined_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        left_datetime: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chatMember',
    }
)

module.exports = ChatMember;