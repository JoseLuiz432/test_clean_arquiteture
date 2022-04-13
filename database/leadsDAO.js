const {ObjectID} = require('mongodb'); 
let leads;

class LeadsDAO {
  static async injectDB(conn) {
    if (leads) {
      return;
    }
    try {
      leads = await conn.db(process.env.DB_NAME).collection("leads");
    } catch (e) {
      console.error(`Unable to establish collection handles in leadsDAO: ${e}`);
    }
  }
  /**
   * Add new product to database
   * @param {Object} lead - The product object to insert.
   * @returns {Object | null} - Returns either a single lead or null.
   */

  static async addlead(lead) {
    await lead.save();
  }
}

module.exports = LeadsDAO;