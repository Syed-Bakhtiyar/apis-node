const TABLES = require('./tables-name');

const CREATE_DEVICE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.DEVICE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                manufacturer CHARACTER VARYING(50),
                                mode CHARACTER VARYING(50),
                                sr_no TEXT,
                                brand VARCHAR(50),
                                base TEXT,
                                sdk TEXT,
                                dev_id TEXT
                           )`;

const CREATE_NETWORK_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.NETWORK_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                roaming TEXT,
                                data_sent DOUBLE PRECISION,
                                data_recieved DOUBLE PRECISION,
                                sim_number TEXT
                           )`;

const CREATE_STORAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.STORAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                ram TEXT,
                                secondary_memory DOUBLE PRECISION,
                                available_storage DOUBLE PRECISION,
                                total_secondary_memory DOUBLE PRECISION
                           )`;

const CREATE_GALLERY_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.GALLERY_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                img_cap_time timestamp,
                                img_cap_lat Integer,
                                img_cap_long Integer,
                                img_file text,
                                timestamp timestamp
                           )`;

const CREATE_WIFI_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.WIFI_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                wifi_ssid TEXT,
                                wifi_name CHARACTER VARYING(60),
                                wifi_connected BOOLEAN,
                                timestamp TIMESTAMP
                           )`;

const CREATE_CONTACTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.CONTACTS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                tot_contacts INTEGER,
                                list_contacts TEXT,
                                landline_contacts TEXT,
                                int_contacts TEXT,
                                freq_contacts TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_CALLS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.CALLS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                tot_calls Integer,
                                inc_calls TEXT,
                                out_calls TEXT,
                                msd_calls TEXT,
                                freq_contacts TEXT,
                                call_ans_rate DOUBLE PRECISION,
                                timestamp TIMESTAMP 
                           )`;

const CREATE_LOCATIONS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.LOCATION_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                current_lat BIGINT,
                                current_long BIGINT,
                                last_lat BIGINT,
                                last_long BIGINT,
                                roam TEXT,
                                timestamp TIMESTAMP
                           )`;
const CREATE_SMS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.SMS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                tot_sms INTEGER,
                                tot_inc_sms INTEGER,
                                tot_out_sms INTEGER,
                                inc_unknown_sms TEXT,
                                bank_sms TEXT,
                                dt_sms TEXT,
                                ct_sms TEXT,
                                loan_sms TEXT,
                                util_sms TEXT,
                                insurance_sms TEXT,
                                mutual_sms TEXT,
                                ecom_sms TEXT,
                                out_sms TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_APP_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.APP_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                tot_apps INTEGER,
                                sys_app INTEGER,
                                user_app INTEGER,
                                timestamp TIMESTAMP
                           )`;

const CREATE_PACKAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.PACKAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                tot_package INTEGER,
                                package_name CHARACTER VARYING(60),
                                timestamp TIMESTAMP
                           )`;

const CREATE_BATTERY_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.BATTERY_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                is_charging BOOLEAN,
                                bat_current_status INTEGER,
                                timestamp TIMESTAMP
                           )`;

const CREATE_ACCOUNTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.ACCOUNTS_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                req_emails TEXT,
                                reg_numbers TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_MEMORY_USAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.MEMORY_USAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                app_mem DOUBLE PRECISION,
                                apps TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_URL_VISITED_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.URL_VISITED_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                url TEXT,
                                timestamp TIMESTAMP
                           )`;

const CREATE_APP_USAGE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.APP_USAGE_TABLE}
                           (
                                id SERIAL PRIMARY KEY,
                                imei_number TEXT,
                                freq_app_usage DOUBLE PRECISION,
                                duration_app_usage DOUBLE PRECISION,
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
