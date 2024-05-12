import { Hono } from 'hono'
import { userRouter } from './Routing/User.routes';
import { blogRouter } from './Routing/book.routes';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user', userRouter)
app.route('/api/v1', blogRouter)

export default app