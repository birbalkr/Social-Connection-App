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
        index: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Student", "Teacher"],
        default: "Student",
    },
    schoolName: {
        type: String,
        required: true,
    },
    status: {
        enum: ["outpass", "ongoing", "out_of_JNV"],
    },
    address: {
        area: { type: String, required: true },
        city: { type: String, required: true }
    },
    refreshToken: {
        type: String,
        default: null,
    }

}, {
    timestamps: true,
})


const userModel = mongoose.model("user", userSchema);
userModel.createIndexes()
export default userModel