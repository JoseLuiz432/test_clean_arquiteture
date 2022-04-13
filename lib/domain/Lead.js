'use strict';

module.exports = class {

  constructor(
      id = null,
      cnpj_cpf, 
      nome_contato, 
      telefone, 
      endereco, 
      email,
      localizacao,
      status_telefone
      ) {
    this.id = id;
    this.email = email;
    this.cnpj_cpf = cnpj_cpf;
    this.nome_contato = nome_contato;
    this.telefone = telefone;
    this.endereco = endereco;
    this.status_telefone = status_telefone
    this.localizacao = localizacao;
  }

};