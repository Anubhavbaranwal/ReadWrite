import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@spearhead08/common";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables : {
		userId: string,
        token: string,
	}
}>();

blogRouter.use('*', async (c, next) => {
	const header= await c.req.header('authorization')||"";

	function sendNotLoggedIn(c:any) {
		c.throw(403, 'You are not logged in');
	}
	try {
        const user = await verify(header, c.env.JWT_SECRET);
		
		if (user) {
			c.set("userId", user.id);
			await next();
		} else {
			sendNotLoggedIn(c);
		}
		} catch(e) {
			console.error(e);
			sendNotLoggedIn(c);
		}
  })

blogRouter.post('/blog/',async(c)=>{
	try {
        const userId = c.get('userId');
		console.log(userId);
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
		console.log(prisma);
        const body = await c.req.json();
       const {success}= createPostInput.safeParse(body);
       if(!success){
        return c.text("please enter the right input");
       }
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        console.log(post);
        return c.json({
            id: post.id
        });
    } catch (error) {
        console.error(error);
        c.status(500)
	    return c.text('An error occurred');
    }
})
blogRouter.put('/blog/:id', async (c) => {
	const userId = c.req.param("id");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const {success}= updatePostInput.safeParse(body);
       if(!success){
        return c.text("please enter the right input");
       }
	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});
blogRouter.get('/blog/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})
blogRouter.delete('/blog/',async(c)=>{
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const post = await prisma.post.delete({
        where: {
            id: body.id,
            authorId: userId
        }
    });
    return c.json(post);
})
blogRouter.get('/blog/bulk/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const posts = await prisma.post.findMany(
            {
                select:{
                    content:true,
                    title:true,
                    id:true,
                    author:{
                        select:{
                            name:true
                        }
                    }

                }
            }
        );
        console.log(posts);
        return c.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        c.status(500);
        return c.text('An error occurred');
    }
});
