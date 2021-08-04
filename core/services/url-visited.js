const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createUrlVisited = (urlVisited) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.URL_VISITED_TABLE} (imei_number, url, timestamp) VALUES 
                                                          ('${urlVisited.imeiNumber}', '${urlVisited.url}', '${timestamp}')`;
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