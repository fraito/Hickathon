'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      firstName: 'John',
      lastName: 'Wayne',
      username: 'thesheriff',
      password: 'thesheriff',
      role: 'manager',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      firstName: 'Homer',
      lastName: 'Simpson',
      username: 'homer',
      password: 'simpson',
      role: 'employee',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      firstName: 'Barney',
      lastName: 'Gumble',
      username: 'barney',
      password: 'gumble',
      role: 'employee',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
