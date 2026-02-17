import { OrderItemDto } from '../../OrderItemDto';

export class CreateOrderRequestDto {
  customerId!: string;
  orderItems!: OrderItemDto[];

  constructor(init?: Partial<CreateOrderRequestDto>) {
    Object.assign(this, init);
  }
}
