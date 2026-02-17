import { OrderItemDto } from '../../OrderItemDto';

export class CreateOrderResponseDto {
  orderId!: string;
  customerId!: number;
  orderItems!: OrderItemDto[];
  totalAmount!: number;
  orderStatus!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(init?: Partial<CreateOrderResponseDto>) {
    Object.assign(this, init);
  }
}
