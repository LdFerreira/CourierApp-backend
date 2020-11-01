import { Router } from 'express';
import OrdersRepository from '../repositories/OrdersRepository';
import CreateOrderService from '../services/CreateOrderService';

const ordersRouter = Router();

const orderRepository = new OrdersRepository();

ordersRouter.get('/', (request, response) => {
  const orders = orderRepository.all();

  return response.json(orders);
});

ordersRouter.post('/', (request, response) => {
  try {
    const { name, url, description, price } = request.body;

    const createOrder = new CreateOrderService(orderRepository);

    const order = createOrder.execute({ name, url, description, price });

    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
