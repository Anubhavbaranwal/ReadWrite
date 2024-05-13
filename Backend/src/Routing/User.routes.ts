import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { login, signup } from "@spearhead08/common";
import { Hono } from "hono";
import { sign } from "hono/jwt";
// import { Signin } from "@spearhead08/common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
  }>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success}= signup.safeParse(body)
    if(!success) {
     return c.text("please Enter the right input");
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name:body.name
      },
    });
    if(!user){
      c.status(400);
      return c.json({ error: "user already exists" });
    }
  
    const token = await sign({ id: user.id ,passowrd:body.passowrd}, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })
})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success}= login.safeParse(body);
    if(!success) {
      return c.text("please enter the right input");
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        }
    });

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id,passowrd:body.passowrd }, c.env.JWT_SECRET);
    return c.json({ jwt });
})
