import { Order } from '../entities/Order';

export interface OrderRepository {
  createOrder(order: Order): Promise<Order>;

  getOrderById(orderId: string): Promise<Order | null>;

  updateOrder(order: Order): Promise<Order>;

  deleteOrder(orderId: string): Promise<void>;
}
