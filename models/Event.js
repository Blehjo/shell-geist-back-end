const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class Event extends Model { }

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'group',
                key: 'id',
            },
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        media_location_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Event;