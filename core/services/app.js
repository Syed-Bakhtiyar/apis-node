const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createApp = (app) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.APP_TABLE} (device_id, tot_apps, sys_app, user_app, timestamp) VALUES 
                                                          ('${app.deviceId}', '${app.totApps}', '${app.sysApp}', '${app.userApp}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createApp};
}