const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createUrlVisited = (urlVisited) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.URL_VISITED_TABLE} (device_id, url, timestamp, server_timestamp) VALUES 
                                                          ('${urlVisited.deviceId}', '${urlVisited.url}', '${urlVisited.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createUrlVisited};
}