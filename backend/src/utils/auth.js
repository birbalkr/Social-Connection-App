import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'


export const UserToken = async ({ userId, role }) => {
    const accessToken = jwt.sign({ userId, role }, config.ACCESSTOKEN, { expiresIn: "15M" })
    const refreshToken = jwt.sign({ userId, role }, config.REFRESHTOKEN, { expiresIn: "7D" })

    return { accessToken, refreshToken }
}