const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createCall = (calls) => {
        const query = `INSERT INTO ${TABLES.CALLS_TABLE} (imei_number, tot_calls, inc_calls, out_calls, msd_calls, freq_contacts, call_ans_rate, timestamp) VALUES 
                                                          ('${calls.imeiNumber}', ${calls.totalCalls}, '${calls.incCalls}', '${calls.outCalls}', '${calls.msdCalls}', '${calls.freqContacts}', ${calls.callAnsRate}, '${calls.timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createCall};
}