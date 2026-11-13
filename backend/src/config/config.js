import dotenv from 'dotenv'
dotenv.config()

export const config = {

    MONGO: process.env.MONGO,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    REFRESHTOKEN: process.env.REFRESHTOKEN
}