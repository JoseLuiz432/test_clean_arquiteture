'use strict';

module.exports = (leadId, { leadRepository }) => {
  return leadRepository.get(leadId);
};