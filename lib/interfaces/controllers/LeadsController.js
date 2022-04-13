'use strict';

const Boom = require('@hapi/boom');
const ListLeads = require('../../application/use_cases/ListLeads');
const CreateLead = require('../../application/use_cases/CreateLead');
const GetLead = require('../../application/use_cases/GetLead');
const DeleteLead = require('../../application/use_cases/DeleteLead');

module.exports = {

  async createLead(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;
    // Input
    const { 
        cnpj_cpf, 
        nome_contato, 
        telefone, 
        endereco, 
        email, 
        localizacao,
        status_telefone
    } = request.payload;

    // Treatment
    const lead = await CreateLead(
        cnpj_cpf, 
        nome_contato, 
        telefone, 
        endereco, 
        email,
        localizacao, 
        status_telefone,
        serviceLocator
        );
    // Output
    return serviceLocator.leadSerializer.serialize(lead);
  },

  async findLeads(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const leads = await ListLeads(serviceLocator);

    // Output
    return leads.map(serviceLocator.leadSerializer.serialize)
  },

  async getLead(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const leadId = request.params.id;

    // Treatment
    const lead = await GetLead(leadId, serviceLocator);

    // Output
    if (!lead) {
      return Boom.notFound();
    }
    return serviceLocator.leadSerializer.serialize(lead);
  },

  async deleteLead(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const leadId = request.params.id;

    // Treatment
    await DeleteLead(leadId, serviceLocator);

    // Output
    return h.response().code(204);
  },

};