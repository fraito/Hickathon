'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AbscenseRequests', [{
      startDate: '15-05-2023',
      endDate: '16-05-2023',
      user: 2,
      status: 0,
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      startDate: '16-05-2023',
      endDate: '16-05-2023',
      user: 3,
      status: 1,
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    },
    {
      startDate: '01-10-2023',
      endDate: '16-10-2023',
      user: 2,
      status: -1,
      createdAt: '2023-05-10 00:00:00',
      updatedAt: '2023-05-10 00:00:00',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AbscenseRequests', null, {});
  }
};
