import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use('/api/*', cors());

app.put('/', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const review = await prisma.review.create({
      data: {
        name: body.name,
        review: body.review,
        star: body.star,
      },
    });

    return c.json({ success: true, review });
  } catch (error) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

app.get('/', (c) => {
  return c.text('Hello from here! Testing and debugging');
});

export default app;