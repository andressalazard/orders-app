import { Order, OrderBuilder } from '../../domain/entities/Order';
import { OrderItem, OrderItemBuilder } from '../../domain/entities/OrderItem';
import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { CreateOrderInputDto } from '../dtos/in/CreateOrderInputDto';
import { CreateOrderResponseDto } from '../dtos/out/CreateOrderResponseDto';
import { OrderItemMapper } from '../mappers/OrderItemMapper';

export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(input: CreateOrderInputDto): Promise<CreateOrderResponseDto> {
    const orderItems = input.orderItems.map((item) =>
      new OrderItemBuilder()
        .setProductId(item.productId)
        .setProductName(item.productName)
        .setQuantity(item.quantity)
        .setUnitPrice(item.unitPrice)
        .build(),
    );

    const order = new OrderBuilder()
        .setCustomerId(input.customerId)
        .setOrderItems(orderItems)
        .build();

    await this.orderRepository.createOrder(order);

    return new CreateOrderResponseDto({
      orderId: order.orderId!,
      customerId: order.customerId!,
      orderItems: order.orderItems!.map(item => ({
        productId: item.productId!,
        productName: item.productName!,
        quantity: item.quantity!,
        unitPrice: item.unitPrice!,
      })),
      totalAmount: order.totalAmount!,
      orderStatus: order.orderStatus!,
      createdAt: order.createdAt!,
      updatedAt: order.updatedAt!,
    });
  }
}
