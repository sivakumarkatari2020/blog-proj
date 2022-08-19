const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Cryptr = require('cryptr');
const { findUser } = require('./middleware/findUser.js');

const dotenv = require('dotenv');
dotenv.config();

async function loginUser(params){
    try {
        // Get user input
        const { email, password } = params;

        //Decryipting pasword using cryptr
        let cryptr = new Cryptr(process.env.TOKEN_KEY);
        let decryptedPassword = cryptr.decrypt(password);
    
        // Validate user input
        if (!(email && password)) {
            return {
                status: 400,
                message: 'All input is required'
            }
        }
        // Validate if user exist in our database
        const user = await findUser({ email });
    
        if (user.data.length > 0 && (await bcrypt.compare(decryptedPassword, user.data[0].password))) {
          // Create token
            const token = jwt.sign(
                { user_id: user.data[0].id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
    
            // save user token
            user.token = token;
    
            // user
            return {
                status: 200,
                data: user
            }
        }
        return {
            status: 400,
            message: "User doesn't exist!"
        }
    } catch (err) {
        console.log(err);
        return {status:400,message:'Something went wrong!!'}
    }
}

module.exports = {
    loginUser
}
