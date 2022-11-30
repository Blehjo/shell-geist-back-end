const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class GroupMember extends Model{ }

GroupMember.init(
    {
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userprofile',
                key: 'id',
            },
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'group',
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
        modelName: 'groupmember',
    }
)

module.exports = GroupMember;