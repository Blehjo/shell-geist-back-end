const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Group extends Model{ }

Group.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            }
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media_location_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        group_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
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
        modelName: 'group',
    }
)

module.exports = Group;