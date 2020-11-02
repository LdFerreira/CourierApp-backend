import { getCustomRepository, getRepository } from 'typeorm';
import Order from '../models/Order';
import User from '../models/User';
import OrdersRepository from '../repositories/OrdersRepository';

interface Request {
  id: string;
  name: string;
  url: string;
  pending: boolean;
  description: string;
  price: number;
  user_id?: User;
}
class CreateOrderService {
  public async execute({
    id,
    name,
    url,
    pending,
    description,
    price,
    user_id,
  }: Request): Promise<Order> {
    const ordersRepository = getRepository(Order);
    const usersRepository = getRepository(User);

    const findUserExists = await usersRepository.findOne({
      where: { id },
    });
    if (findUserExists) {
      throw Error('This user is not exists');
    }

    const order = ordersRepository.create({
      name,
      url,
      pending,
      description,
      price,
      user_id,
    });

    await ordersRepository.update(id, order);

    return order;
  }
}

export default CreateOrderService;
