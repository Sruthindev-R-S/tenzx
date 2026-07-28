const argon2 = require('argon2');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            const loginRepository = AppDataSource.getRepository(loginSchema);
            const userLogin = await loginRepository.findOneBy({ username });
            if (!userLogin) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            const isPasswordValid = await argon2.verify(userLogin.password, password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            return res.status(200).json({ message: 'Login successful' });
        } else {
            const loginRepository = AppDataSource.getRepository(loginSchema);
            const userLogin = await loginRepository.findOneBy({ username });
            if (!userLogin) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            const isPasswordValid = await argon2.verify(userLogin.password, password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            return res.status(200).json({ message: 'Login successful' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});