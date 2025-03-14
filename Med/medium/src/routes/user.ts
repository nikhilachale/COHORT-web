import {Hono} from "hono";
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
 import { signupInput ,signinInput} from "@nikhilachale/medium-blog"


export const userRouter=new Hono<
{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }>();



// userRouter.post('/signup', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());

//   const body = await c.req.json();
//   const success = signupInput.safeParse(body);
//   if(!success)
//   {
//     c.status(411);
//     return c.json({
//       message:"incorrect inputs"
//     })
//   }
//   try {

//     const user = await prisma.user.create({
//       data: {
//         email: body.email,
//         password: body.password ,
//         name :body.name
//       }
//     });

//     const jwt = await sign({
//       id: user.id
//     }, c.env.JWT_SECRET);
//     // localStorage.setItem("token", jwt);
//     return c.text(jwt)
   
//   } catch (e) {
//     console.log('Error:', e);
//     return c.json({ error: 'Internal Server Error' }, 500);
//   }
// });





userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

  const body = await c.req.json();
  const result = signupInput.safeParse(body);
  if (!result.success) {
    c.status(411);
    return c.json({ message: "Incorrect inputs", errors: result.error });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email: body.email } });
    if (existingUser) {
      return c.json({ error: "Email already registered" }, 400);
    }

    // Store password as plain text (⚠️ Not recommended for production)
    const user = await prisma.user.create({
      data: { email: body.email, password: body.password, name: body.name }
    });

    if (!c.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
  } catch (e) {
    console.error("Signup Error:", e);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});



userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const success = signinInput.safeParse(body);
  if(!success) 
  {
    c.status(411);
    return c.json({
      message:"incorrect inputs"
    })
  }
  const user = await prisma.user.findUnique({
    where: { email: body.email }
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "User not found" });
  }

  // Simple password check (not recommended for production)
  if (user.password !== body.password) {
    c.status(403);
    return c.json({ error: "Invalid password" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt: token });
});