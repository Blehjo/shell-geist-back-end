const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class GroupChannel extends Model{ }

GroupChannel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'group',
                key: 'id',
            }
        },
        channel_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        channel_description: {
            type: DataTypes.STRING,
            allowNull: true,
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
        modelName: 'groupchannel',
    }
)

module.exports = GroupChannel;