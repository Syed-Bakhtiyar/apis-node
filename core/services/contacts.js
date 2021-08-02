const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createContacts = (contact) => {
        const query = `INSERT INTO ${TABLES.CONTACTS_TABLE} (imei_number, tot_contacts, list_contacts, landline_contacts, int_contacts, freq_contacts, timestamp) VALUES 
                                                          ('${contact.imeiNumber}', ${contact.totContacts}, '${contact.listContacts}', '${contact.landlineContacts}', '${contact.intContacts}', '${contact.freqContacts}', '${contact.timestamp}')`;
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