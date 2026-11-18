import {User} from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({message: "User with this email already exists"});
        }

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: password,
        });

        res.status(201).json({message: "User created successfully",
        user: {id: user._id, email: user.email, username: user.username}
        });
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
};

const loginUser = async (req, res) => {
    try {


        const {email, password} = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({
        message: "User not found"});
    

        const isMatch = await user.comparePassword(password);
if (!isMatch) return res.status(400).json({
    message: "Invalid password"});

res.status(200).json({
    message: "Login successful",
    user: {id: user._id, 
        email: user.email, 
        username: user.username}
})
    } catch (error) {
res.status(500).json({
    message: "Internal server error"
})

    }
}


export {
    registerUser,
    loginUser
};