'use strict';

const LeadsController = require('../controllers/LeadsController');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/leads',
        handler: LeadsController.findLeads,
        options: {
          description: 'List all Leads',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/leads',
        handler: LeadsController.createLead,
        options: {
          description: 'Create a lead',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/leads/{id}',
        handler: LeadsController.getLead,
        options: {
          description: 'Get a lead by its {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/leads/{id}',
        handler: LeadsController.deleteLead,
        options: {
          description: 'Delete a lead',
          tags: ['api'],
        },
      },
    ]);
  }
};