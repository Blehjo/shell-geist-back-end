const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class PostComment extends Model{ }

PostComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
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
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_date_time: {
            
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'postcomment',
    }
)

module.exports = PostComment;