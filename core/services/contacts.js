const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createContacts = (contact) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.CONTACTS_TABLE} (device_id, tot_contacts, list_contacts, landline_contacts, int_contacts, timestamp) VALUES 
                                                          ('${contact.deviceId}', '${contact.totContacts}', '${contact.listContacts}', '${contact.landlineContacts}', '${contact.intContacts}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createContacts};
}