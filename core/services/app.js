const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createApp = (app) => {
        const query = `INSERT INTO ${TABLES.APP_TABLE} (imei_number, tot_apps, sys_app, user_app, timestamp) VALUES 
                                                          ('${app.imeiNumber}', ${app.totApps}, ${app.sysApp}, ${app.userApp}, '${app.timestamp}')`;
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