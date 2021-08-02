const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createAccounts = (accounts) => {
        const query = `INSERT INTO ${TABLES.ACCOUNTS_TABLE} (imei_number, req_emails, reg_numbers, timestamp) VALUES 
                                                          ('${accounts.imeiNumber}', '${accounts.reqEmails}', '${accounts.regNumbers}', '${accounts.timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createAccounts};
}