import {z} from "zod";

export const signup=z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2)
})

export const login=z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
export type Signup=z.infer<typeof signup>
export type Signin=z.infer<typeof login>

export const createPostInput=z.object({
    title:z.string(),
    content:z.string(),
})

export const updatePostInput=z.object({
    title:z.string().optional(),
    content:z.string().optional()
})

export type CreatePostInput=z.infer<typeof createPostInput>
export type UpdatePostInput=z.infer<typeof updatePostInput>
