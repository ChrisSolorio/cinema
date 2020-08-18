const Pool = require("./node_modules/pg/lib").Pool;

const pool = new Pool ({
    user: "chris",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "cinema"
});

module.exports = pool;