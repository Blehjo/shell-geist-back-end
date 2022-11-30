const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Message extends Model{ }

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        from_profile: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sent_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        conversation_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'conversation',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'message',
    }
)

module.exports = Message;