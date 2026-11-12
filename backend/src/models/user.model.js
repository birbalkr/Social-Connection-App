import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Student", "Teacher"],
        default: "Student",
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    status: {
        enum: ["outpass", "ongoing", "out_of_JNV"],
        required: true,
    },
    address: {
        area: { type: String, required: true },
        city: { type: String, required: true }
    }

}, {
    timestamps: true,
})


const userModel = mongoose.model("user",userSchema);
export default userModel