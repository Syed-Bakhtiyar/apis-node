const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createWIFI = (wifi) => {
        const query = `INSERT INTO ${TABLES.WIFI_TABLE} (imei_number, wifi_ssid, wifi_name, wifi_connected, timestamp) VALUES 
                                                          ('${wifi.imeiNumber}', '${wifi.wifiSSID}', '${wifi.wifiName}', '${wifi.wifiConnected}', '${wifi.timestamp}')`;
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