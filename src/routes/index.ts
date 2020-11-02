import { Router } from 'express';

import ordersRouter from './orders.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/orders', ordersRouter);
routes.use('/users', usersRouter);
export default routes;
