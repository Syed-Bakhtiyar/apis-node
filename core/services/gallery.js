const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createGallery = (gallery) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.GALLERY_TABLE} (device_id, img_cap_time, img_cap_lat, img_cap_long, img_file, timestamp, server_timestamp) VALUES 
                                                          ('${gallery.deviceId}', '${gallery.imgCapTime}', '${gallery.imgCapLat}', '${gallery.imgCaptLong}', '${gallery.imgFile}', '${gallery.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createGallery};
}