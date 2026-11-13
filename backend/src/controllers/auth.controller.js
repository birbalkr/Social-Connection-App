import userModel from "../models/user.model.js"
import { UserToken } from "../utils/auth.js"






export const registerUser = async (req, res) => {
    const { name, email, userName, password, schoolName, status, address } = req.body


    const user = await userModel.create({
        name, email, userName, password, schoolName, status, address
    })

    const usernameExists = await userModel.findOne({ userName })
    
    if (usernameExists) {
        return res.status(409).json({
            message: "username is already exists.."
        })
    }
    const emailExists = await userModel.findOne({ email })
    if (emailExists) {
        return res.status(409).json({
            message: "user email is already exists.."
        })
    }

    try {
        const { accessToken, refreshToken } = await UserToken({ userId: user.id, role: user.role })

        res.cookie("refreshToken", refreshToken, { httpOnly: true, })

        await userModel.findByIdAndUpdate(user._id, { refreshToken })

        res.status(201).json({
            message: "User create successfully...",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    schoolName: user.schoolName,
                    address: user.address

                },
                accessToken
            }
        })
    } catch (error) {
        console.log("error in register:  ", error);

    }

}