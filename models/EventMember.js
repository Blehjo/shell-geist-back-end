const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class EventMember extends Model{ }

EventMember.init(
    {
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
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
        modelName: 'eventmember',
    }
)

module.exports = EventMember;