const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createNetwork = (network) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.NETWORK_TABLE} (imei_number, roaming, data_sent, data_recieved, sim_number, timestamp) VALUES 
                                                          ('${network.imeiNumber}', '${network.roaming}', '${network.dataSent}', '${network.dataRevieved}', '${network.simNumber}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createNetwork};
}