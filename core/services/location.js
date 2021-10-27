const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createLocation = (location) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.LOCATION_TABLE} (device_id, current_lat, current_long, place_visited, timestamp) VALUES 
                                                          ('${location.deviceId}', '${location.currentLat}', '${location.currentLong}', '${location.placeVisited}', '${timestamp}')`;
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