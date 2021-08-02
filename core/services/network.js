const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createNetwork = (network) => {
        const query = `INSERT INTO ${TABLES.NETWORK_TABLE} (imei_number, roaming, data_sent, data_recieved, sim_number) VALUES 
                                                          ('${network.imeiNumber}', '${network.roaming}', ${network.dataSent}, ${network.dataRevieved}, '${network.simNumber}')`;
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