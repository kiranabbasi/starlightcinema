import {z} from 'zod';

export const historySchema = z.object({
    content: z
    .string()
    .min(1, "Content must be atleast 1 character long")
})