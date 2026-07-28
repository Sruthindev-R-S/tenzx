const router = require('express').Router();
const validateRegisterInput = require('../middleware/validateRegister');
const AppDataSource = require('../database/users');
const userSchema = require('../entities/userObject');
const loginSchema = require('../entities/loginObject');
const argon2 = require('@node-rs/argon2');

router.post('/register', validateRegisterInput, async (req, res) => {
    const { username, email, password, name } = req.body;
    const hashedPassword = await argon2.hash(password);

    const user = {
        username,
        email,
        name
    };
    const login = {
        username,
        password: hashedPassword
    };
    try{
        if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
        const userRepository = AppDataSource.getRepository(userSchema);
        const loginRepository = AppDataSource.getRepository(loginSchema);
        await loginRepository.save(login);
        await userRepository.save(user);

    return res.status(201).json({ message: 'User registered successfully' });
        }
        else{
            const userRepository = AppDataSource.getRepository(userSchema);
            const loginRepository = AppDataSource.getRepository(loginSchema);
            await loginRepository.save(login);
            await userRepository.save(user);
            return res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

});


module.exports = router;