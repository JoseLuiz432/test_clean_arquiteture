'use strict';

const constants = require('./constants');
const environment = require('./environment');
//const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const LeadSerializer = require('../../interfaces/serializers/LeadSerializer');

function buildBeans() {

  const beans = {
    //accessTokenManager: new JwtAccessTokenManager(),
    leadSerializer: new LeadSerializer(),
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    
    const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
    beans.leadRepository = new UserRepositoryInMemory();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    console.log("use mongo")
    const LeadRepositoryMongo = require('../repositories/LeadRepositoryMongo');
    beans.leadRepository = new LeadRepositoryMongo();
  } 

  return beans;
}

module.exports = buildBeans();