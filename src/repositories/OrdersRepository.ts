import Order from '../models/Order';

interface CreateOrderDTO {
  name: string;
  url: string;
  description: string;
  price: number;
}
class OrdersRepository {
  private orders: Order[];

  constructor() {
    this.orders = [];
  }

  public all(): Order[] {
    return this.orders;
  }

  public create({ name, url, description, price }: CreateOrderDTO): Order {
    const order = new Order({ name, url, description, price });

    this.orders.push(order);

    return order;
  }
}

export default OrdersRepository;
