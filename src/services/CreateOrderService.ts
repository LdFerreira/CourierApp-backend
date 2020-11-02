import { getCustomRepository } from 'typeorm';
import Order from '../models/Order';
import OrdersRepository from '../repositories/OrdersRepository';

interface Request {
  name: string;
  url: string;
  description: string;
  price: number;
}
class CreateOrderService {
  public async execute({
    name,
    url,
    description,
    price,
  }: Request): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const findOrdersInSameName = await ordersRepository.findByName(name);

    if (findOrdersInSameName) {
      throw Error('This order is already exist');
    }

    const order = ordersRepository.create({
      name,
      url,
      description,
      price,
    });

    await ordersRepository.save(order);

    return order;
  }
}

export default CreateOrderService;
