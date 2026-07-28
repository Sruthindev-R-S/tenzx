const {z}= require('zod');
const registerSchema = z.object({
    username: z.string().min(3, {message: "Username must be at least 3 characters long"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
    name: z.string().min(1, {message: "Name is required"})
});

const validateRegisterInput = (req, res, next) => {
    const result =registerSchema.safeParse(req.body);
    if(!result.success){
        const errors = result.error.errors.map(err => ({field: err.path[0], message: err.message}));
        return res.status(400).json({errors});
    }
    req.body = result.data; 
    next();
}

module.exports = validateRegisterInput;