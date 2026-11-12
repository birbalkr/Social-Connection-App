import mongoose from "mongoose"
import { config } from "./config.js"


export const connectedDB = async () => {
    await mongoose.connect(config.MONGO)
    console.log("Databases start ................");
    
}