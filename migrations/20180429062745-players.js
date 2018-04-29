'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'players',
            {
                pid: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                pnumber: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                pname: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                bid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                },
                mid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                }
            }
        ).then(() => {
            return queryInterface.addConstraint(
                'players', ['bid'], {
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
                'players', ['mid'], {
                    type: 'foreign key',
                    name: 'mid_fkey',
                    references: {
                        table: 'manager',
                        field: 'mid'
                    }
                }
            )
        }).then(() =>{
            return queryInterface.addIndex(
                'players', ['pnumber'], {
                    type: 'UNIQUE',
                    name: 'pnumber_index'
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
        return queryInterface.dropTable('players', {cascade: true});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
