import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "username is required"],
			unique: true,
			max: 10,
			min: 5,
		},
		password: {
			type: String,
			required: [true, "password is required"],
		},
		email: {
			type: String,
			required: [true, "email is required"],
			unique: true,
		},
		isVarified: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: {
			type: String,
			default: undefined,
		},
		forgotPasswordExpiry: {
			type: Date,
			default: undefined,
		},
		verifyToken: {
			type: String,
			default: undefined,
		},
		verifyExpiry: {
			type: Date,
			default: undefined,
		},
	},
	{
		timestamps: true,
	}
);

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
