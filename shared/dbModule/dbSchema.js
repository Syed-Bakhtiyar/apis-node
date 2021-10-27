const TABLES = require('./tables-name');

const CREATE_DEVICE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.DEVICE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                manufacturer TEXT,
                                mode TEXT,
                                sr_no TEXT,
                                brand TEXT,
                                base TEXT,
                                sdk TEXT,
                                timestamp timestamp
                           )`;

const CREATE_NETWORK_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.NETWORK_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                roaming TEXT,
                                data_sent TEXT,
                                data_recieved TEXT,
                                sim_number TEXT,
                                timestamp timestamp
                           )`;

const CREATE_STORAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.STORAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                ram TEXT,
                                secondary_memory TEXT,
                                available_ram TEXT,
                                available_sec_memory TEXT,
                                timestamp timestamp
                           )`;

const CREATE_GALLERY_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.GALLERY_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                img_cap_time TEXT,
                                img_cap_lat TEXT,
                                img_cap_long TEXT,
                                img_file TEXT,
                                timestamp timestamp
                           )`;

const CREATE_WIFI_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.WIFI_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                wifi_ssid TEXT,
                                wifi_name TEXT,
                                wifi_connected TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_CONTACTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.CONTACTS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                tot_contacts TEXT,
                                list_contacts TEXT,
                                landline_contacts TEXT,
                                int_contacts TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_CALLS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.CALLS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                type TEXT,
                                number TEXT,
                                duration TEXT,
                                start_time TEXT,
                                call_ans_rate TEXT,
                                timestamp TIMESTAMP 
                           )`;

const CREATE_LOCATIONS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.LOCATION_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                current_lat TEXT,
                                current_long TEXT,
                                place_visited TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_SMS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.SMS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                type TEXT,
                                sender TEXT,
                                body TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_APP_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.APP_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                tot_apps TEXT,
                                sys_app TEXT,
                                user_app TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_PACKAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.PACKAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                tot_package TEXT,
                                package_name TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_BATTERY_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.BATTERY_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                is_charging TEXT,
                                bat_current_status TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_ACCOUNTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.ACCOUNTS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                data TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_MEMORY_USAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.MEMORY_USAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                app_mem TEXT,
                                apps TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_URL_VISITED_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.URL_VISITED_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                url TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_APP_USAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.APP_USAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                device_id TEXT,
                                freq_app_usage TEXT,
                                duration_app_usage TEXT,
                                pattern TEXT,
                                most_used TEXT,
                                least_used TEXT,
                                timestamp TIMESTAMP
                           )`;


module.exports = {
        CREATE_DEVICE_TABLE,
        CREATE_NETWORK_TABLE,
        CREATE_STORAGE_TABLE,
        CREATE_GALLERY_TABLE,
        CREATE_WIFI_TABLE,
        CREATE_CONTACTS_TABLE,
        CREATE_CALLS_TABLE,
        CREATE_LOCATIONS_TABLE,
        CREATE_SMS_TABLE,
        CREATE_APP_TABLE,
        CREATE_PACKAGE_TABLE,
        CREATE_BATTERY_TABLE,
        CREATE_ACCOUNTS_TABLE,
        CREATE_MEMORY_USAGE_TABLE,
        CREATE_URL_VISITED_TABLE,
        CREATE_APP_USAGE_TABLE
}
