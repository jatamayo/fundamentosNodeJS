// npm install bcrypt
// Nos sirve para cifrado de datos

const bcrypt = require('bcrypt');

const password = 'password123#';

bcrypt.hash(password, 5, (error, hash)=>{
    console.log(hash);

    bcrypt.compare(password, hash, (error, result)=>{
        console.log(result);
    })
});

