const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');

async function findUser(params){
    const rows = await db.query(
        `SELECT * FROM db_test.users WHERE email = '${params.email}';`
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    findUser
}
