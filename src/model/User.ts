import mongoose, {Schema, Document} from "mongoose";

export interface History extends Document{
    content: string;
    createdAt: Date;
}

const HistorySchema: Schema<History> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    userName: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    history: History[];
}

const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true, "UserName is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a Valid email adress.']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry date is required"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    history: [HistorySchema]
    
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;