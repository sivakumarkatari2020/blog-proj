const db = require('./db');
const helper = require('../../helper');

async function createUser(params){
    const rows = await db.query(
        `INSERT INTO db_test.users (username,email,password,first_name,last_name,address_id,temp_password,session_token,status,created_at,modified_at) VALUES ('${params.username}','${params.email}','${params.password}',null,null,null,null,null,1,'${new Date().toISOString()}','${new Date().toISOString()}');`
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    createUser
}
