const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUser } = require('./middleware/findUser.js');
const { createUser } = require('./middleware/createUser.js');

const dotenv = require('dotenv');
dotenv.config();

async function registerUser(params){
    try {
        // Get user input
        const { username, email, password } = params;
    
        // Validate user input
        if (!(email && password && username)) {
            return {
                status: 400,
                message: 'All input is required'
            }
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await findUser({ email });
    
        if (oldUser.data.length > 0) {
            return {
                status: 409,
                message : "User Already Exist. Please Login"
            }
        }
    
        //Encrypt user password
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        encryptedPassword = await bcrypt.hash(password, salt);
        console.log(encryptedPassword);
    
        // Create user in our database
        const user = await createUser({
            username,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });
    
        // Create token
        const token = jwt.sign(
            { user_id: user.data.insertId, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        // save user token
        const userData = await findUser({email});
        userData.token = token;
    
        // return new user
        return {
            status: 201,
            data: userData
        }

    } catch (err) {
        console.log(err);
        return {status:400,message:'Something went wrong!!'}
    }
}

module.exports = {
    registerUser
}
