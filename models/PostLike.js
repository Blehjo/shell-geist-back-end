const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class PostLike extends Model { }

PostLike.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userpost',
                key: 'id',
            },
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
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
        modelName: 'postlike',
    }
)

module.exports = PostLike;