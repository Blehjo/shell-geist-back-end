const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Conversation extends Model{ }

Conversation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        conversation_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'conversation',
    }
)

module.exports = Conversation;