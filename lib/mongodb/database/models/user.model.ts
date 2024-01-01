import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    firstName: {type: String, requred: true},
    lastName: {type: String, requred: true},
    photo: {type: String, required: true}
})


const User = models.User || model('User', UserSchema)


export default User;