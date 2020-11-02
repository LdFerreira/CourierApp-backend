import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import OrdersRepository from '../repositories/OrdersRepository';
import CreateOrderService from '../services/CreateOrderService';
import UpdateOrderService from '../services/UpdateOrderService';

const ordersRouter = Router();

ordersRouter.get('/', async (request, response) => {
  const orderRepository = getCustomRepository(OrdersRepository);
  const orders = await orderRepository.find();

  return response.json(orders);
});

ordersRouter.post('/', async (request, response) => {
  try {
    const { name, url, description, price } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({ name, url, description, price });

    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
ordersRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, url, pending, description, price, user_id } = request.body;

    const updateOrder = new UpdateOrderService();

    const order = await updateOrder.execute({
      id,
      name,
      url,
      pending,
      description,
      price,
      user_id,
    });

    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
