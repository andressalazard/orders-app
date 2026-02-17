import { Order } from '../../domain/entities/Order';
import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { prisma } from './prisma';

export class PrismaOrderRepository implements OrderRepository {
  async createOrder(order: Order): Promise<Order> {
    await prisma.order.create({
      data: {
        orderId: order.orderId ?? '',
        customerId: order.customerId ?? '',
        totalAmount: order.totalAmount ?? 0,
        orderStatus: order.orderStatus ? String(order.orderStatus) : 'PENDING',
        createdAt: order.createdAt ?? new Date(),
        updatedAt: order.updatedAt ?? new Date(),
      },
    });
    return order;
  }
}
