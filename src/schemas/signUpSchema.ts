import {z} from 'zod';
export const userNameValidation = z
    .string()
    .min(3, "UserName must be atleast three characters.")
    .max(15, "UserName must not be more than 15 characters.")
    .regex(/^[a-zA-Z0-9_]+$/, "UserName must not contain special characters")

export const signUpSchema = z.object({
    
})