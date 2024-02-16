import mongoose, {Document} from "mongoose";

interface IUser extends Document {
    name: string;
    password: string;
    email: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;