const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createWIFI = (wifi) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.WIFI_TABLE} (device_id, wifi_ssid, wifi_name, wifi_connected, timestamp) VALUES 
                                                          ('${wifi.deviceId}', '${wifi.wifiSSID}', '${wifi.wifiName}', '${wifi.wifiConnected}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createWIFI};
}