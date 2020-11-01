import Order from '../models/Order';
import OrdersRepository from '../repositories/OrdersRepository';

interface Request {
  name: string;
  url: string;
  description: string;
  price: number;
}
class CreateOrderService {
  private ordersRepository: OrdersRepository;

  constructor(ordersRepository: OrdersRepository) {
    this.ordersRepository = ordersRepository;
  }

  public execute({ name, url, description, price }: Request): Order {
    const order = this.ordersRepository.create({
      name,
      url,
      description,
      price,
    });

    return order;
  }
}

export default CreateOrderService;
