import {z} from 'zod';
export const userNameValidation = z
    .string()
    .min(3, "UserName must be atleast three characters.")
    .max(15, "UserName must not be more than 15 characters.")
    .regex(/^[a-zA-Z0-9_]+$/, "UserName must not contain special characters")

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message: 'INVALID email address'}),
    password: z.string().min(6, {message: 'Password must be atleast 6 characters'})
})