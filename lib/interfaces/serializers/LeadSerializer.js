'use strict';

const _serializeSingleLead = (lead) => {
  return {
    'id': lead.id,
    'cnpj_cpf': lead.cnpj_cpf,
    'nome_contato': lead.nome_contato,
    'telefone': lead.telefone,
    'endereço': lead.endereco,
    'email': lead.email,
    'localizacao': lead.localizacao,
    'status_telefone': lead.status_telefone
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleLead);
    }
    return _serializeSingleLead(data);
  }

};