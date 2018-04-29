'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'owner',
            {
                oid: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                oname: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                title: {
                    type: Sequelize.STRING(50),
                    allowNull: true,
                },
                bid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                },
                cid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                }
            }
        ).then(() => {
            return queryInterface.addConstraint(
                'owner', ['bid'], {
                    type: 'foreign key',
                    name: 'bid_fkey',
                    references: {
                        table: 'board_member',
                        field: 'bid'
                    },
                    onUpdate: 'cascade'
                }
            )
        }).then(() => {
            return queryInterface.addConstraint(
                'owner', ['cid'], {
                    type: 'foreign key',
                    name: 'cid_fkey',
                    references: {
                        table: 'club',
                        field: 'cid'
                    }
                }
            )
        })
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('owner', {cascade: true});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
