const { Pool } = require('pg');

module.exports = new Pool({
    host: 'db',
    database: 'guest_list',
    user: 'root',
    password: 'root',
});