'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products', [
    {
        
        p_name: 'Laderas Campestres',
        price: '$3000.00',
        description: 'Los páramos clandestinos chocan en un mar de olores pintorescos',
        p_image: "-",
        c_id: 1
    }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('products', null, {});
    
  }
};