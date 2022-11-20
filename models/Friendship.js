const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class Friendship extends Model { }

Friendship.init(
    {
        profile_request: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
        profile_accept: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'friendship',
    }
)

module.exports = Friendship;