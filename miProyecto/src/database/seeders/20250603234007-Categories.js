'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('categories', [
        {c_name: 'Plato'},
        {c_name: 'Taza'}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('categories', null, {});
    
  }
};
