import { OrderItem } from '../../domain/entities/OrderItem';
import { OrderItemDto } from '../../infraestructure/dtos/OrderItemDto';

export class OrderItemMapper {
  static toDto(item: OrderItem): OrderItemDto {
    return {
      productId: item.productId,
      productName: item.productName,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    };
  }
}
