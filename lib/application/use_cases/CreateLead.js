'use strict';

const Lead = require('../../domain/Lead');

module.exports = (
    cnpj_cpj, 
    nome_contato, 
    telefone, 
    endereco, 
    email,
    localizacao, 
    status_telefone,
    { leadRepository }) => {
  const lead = new Lead(
      null, 
      cnpj_cpj, 
      nome_contato, 
      telefone, 
      endereco, 
      email,
      localizacao,
      status_telefone
    );
  console.log(localizacao)
  return leadRepository.persist(lead);
};