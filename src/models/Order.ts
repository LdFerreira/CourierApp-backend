import { uuid } from 'uuidv4';

class Order {
  id: string;

  name: string;

  url: string;

  description: string;

  price: number;

  constructor({ name, url, description, price }: Omit<Order, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.url = url;
    this.description = description;
    this.price = price;
  }
}

export default Order;
