const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createSMS = (sms) => {
        const query = `INSERT INTO ${TABLES.SMS_TABLE} (imei_number, tot_sms, tot_inc_sms, tot_out_sms, inc_unknown_sms, bank_sms, dt_sms, ct_sms, loan_sms, util_sms, insurance_sms, mutual_sms, ecom_sms, out_sms, timestamp) VALUES 
                                                          ('${sms.imeiNumber}', ${sms.totSms}, ${sms.totIncSms}, ${sms.totalOutSms}, '${sms.incUnknownSms}', '${sms.bankSms}', '${sms.dtSms}', '${sms.ctSms}', '${sms.loanSms}', '${sms.utilSms}', '${sms.insuranceSms}', '${sms.mutualSms}', '${sms.ecomSms}', '${sms.outSms}', '${sms.timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createSMS};
}