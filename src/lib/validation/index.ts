import { z } from "zod";


export const signUpValidationSchema = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "Too short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "password must be at least 8 character" })
})