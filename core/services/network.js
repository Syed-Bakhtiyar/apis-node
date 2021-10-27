const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createNetwork = (network) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.NETWORK_TABLE} (device_id, roaming, data_sent, data_recieved, sim_number, timestamp, server_timestamp) VALUES 
                                                          ('${network.deviceId}', '${network.roaming}', '${network.dataSent}', '${network.dataRevieved}', '${network.simNumber}', '${network.timestamp}', '${serverTimestamp}')`;
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