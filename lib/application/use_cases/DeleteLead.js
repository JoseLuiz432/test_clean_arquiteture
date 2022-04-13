'use strict';

module.exports = (leadId, { leadRepository }) => {
  return leadRepository.remove(leadId);
};