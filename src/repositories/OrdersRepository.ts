import { EntityRepository, Repository } from 'typeorm';
import Order from '../models/Order';

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
  public async findByName(name: string): Promise<Order | null> {
    const findOrder = await this.findOne({
      where: { name },
    });

    return findOrder || null;
  }
}

export default OrdersRepository;
