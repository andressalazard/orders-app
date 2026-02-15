import { OrderItemDto } from '../../OrderItemDto';

export class CreateOrderResponseDto {
  public orderId?: string;
  public userId?: number;
  public orderItems?: OrderItemDto[];
  public totalAmount?: number;
  public orderStatus?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(init?: Partial<CreateOrderResponseDto>) {
    Object.assign(this, init);
  }
}
