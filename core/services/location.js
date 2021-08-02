const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createLocation = (location) => {
        const query = `INSERT INTO ${TABLES.LOCATION_TABLE} (imei_number, current_lat, current_long, last_lat, last_long, roam, timestamp) VALUES 
                                                          ('${location.imeiNumber}', ${location.currentLat}, ${location.currentLong}, ${location.lastLat}, '${location.lastLong}', '${location.roam}', '${location.timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createLocation};
}