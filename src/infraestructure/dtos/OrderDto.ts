import { OrderItemDto } from './OrderItemDto';

export class OrderDto {
  public orderId?: string;
  public customerId?: string;
  public orderItems?: OrderItemDto[];
  public totalAmount?: number;
  public orderStatus?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(init?: Partial<OrderDto>) {
    Object.assign(this, init);
  }
}
