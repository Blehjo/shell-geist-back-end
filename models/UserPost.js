const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class UserPost extends Model { }

UserPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
        written_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        media_location_url: {
            type: DataTypes.STRING,
            references: {
                model: 'game',
                key: 'id',
            },
        },
        created_date_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userpost',
    }
)

module.exports = Post;