const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createUrlVisited = (urlVisited) => {
        const query = `INSERT INTO ${TABLES.URL_VISITED_TABLE} (imei_number, url, timestamp) VALUES 
                                                          ('${urlVisited.imeiNumber}', '${urlVisited.url}', '${urlVisited.timestamp}')`;
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