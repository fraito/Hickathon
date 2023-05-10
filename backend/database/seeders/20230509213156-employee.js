'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      firstName: 'John',
      lastName: 'Wayne',
      username: 'thesheriff',
      password: '$2a$10$/OlAN6IyCeaJa4k8AyYIrOTSWtTkjnf8bq8johz2Be6i2zqG7GNFu', // thesheriff
      role: 'manager',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      firstName: 'Homer',
      lastName: 'Simpson',
      username: 'homer',
      password: '$2a$10$cXk5GQfaxsXV0u9v6cQzF.p2PdHEy6kMU6Ny8fb7.W8S./4Tlj1u.', // simpson
      role: 'employee',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      firstName: 'Barney',
      lastName: 'Gumble',
      username: 'barney',
      password: '$2a$10$14OdGhF.nKfdOLq1Sg0mK.A7lgFsoO5oC3PCzOcvd3c2k8HSkxmk.', // gumble
      role: 'employee',
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
