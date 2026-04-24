import { User } from "../models/user.model"
import bcrypt from "bcryptjs"


//register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                messsage: "All fields are required"
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            success: true,
            message: "Account created successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

//login