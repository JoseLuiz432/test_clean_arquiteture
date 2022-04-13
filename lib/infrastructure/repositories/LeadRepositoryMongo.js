'use strict';

const Lead = require('../../domain/Lead');
const MongooseLead = require('../orm/schemas/Lead');
const LeadRepository = require('../../domain/LeadRepository');
const assert = require('assert')

module.exports = class extends LeadRepository {

  constructor() {
    super();
  }

  async persist(leadEntity) {
    const { cnpj_cpf, nome_contato, telefone, endereco, email,  localizacao, status_telefone } = leadEntity;
    const mongooseLead = new MongooseLead({  cnpj_cpf, nome_contato, telefone, endereco, email,  localizacao, status_telefone });
    await mongooseLead.save();
    console.log(mongooseLead.localizacao)
    return new Lead(
        mongooseLead.id, mongooseLead.cnpj_cpf, mongooseLead.nome_contato, mongooseLead.telefone, 
        mongooseLead.endereco, mongooseLead.email, mongooseLead.localizacao, mongooseLead.status_telefone
        );
  }

  async merge(leadEntity) {
    const { id, cnpj_cpf, nome_contato, telefone, endereco, email,  localizacao, status_telefone } = leadEntity;
    const mongooseLead = MongooseLead.findByIdAndUpdate(id, { cnpj_cpf, nome_contato, telefone, endereco, email,  localizacao, status_telefone });
    return new Lead(
      mongooseLead.id, mongooseLead.cnpj_cpf, mongooseLead.nome_contato, mongooseLead.telefone, 
      mongooseLead.endereco, mongooseLead.email, mongooseLead.localizacao, mongooseLead.status_telefone
      );
  }

  async remove(leadId) {
    return MongooseLead.findOneAndDelete(leadId);
  }

  async get(leadId) {
    const mongooseLead = await MongooseLead.findById(leadId);
    return new Lead(
      mongooseLead.id, mongooseLead.cnpj_cpf, mongooseLead.nome_contato, mongooseLead.telefone, 
      mongooseLead.endereco, mongooseLead.email, mongooseLead.localizacao, mongooseLead.status_telefone
      );
  }

  async getByCnpjCpf(userCnpjCpf) {
    const mongooseLead = await MongooseLead.find({ cnpj_cpf: userCnpjCpf });
    return new Lead(
      mongooseLead.id, mongooseLead.cnpj_cpf, mongooseLead.nome_contato, mongooseLead.telefone, 
      mongooseLead.endereco, mongooseLead.email, mongooseLead.localizacao, mongooseLead.status_telefone
      );
  }

  async find() {
    const mongooseLead = await MongooseLead.find();
    return mongooseLead.map((mongooseLead) => {
        return new Lead(
          mongooseLead.id, mongooseLead.cnpj_cpf, mongooseLead.nome_contato, mongooseLead.telefone, 
          mongooseLead.endereco, mongooseLead.email, mongooseLead.localizacao, mongooseLead.status_telefone
          );
    });
  }

};