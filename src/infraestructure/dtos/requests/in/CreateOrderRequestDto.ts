import { OrderItemDto } from '../../OrderItemDto';

export class CreateOrderRequestDto {
  public customerId?: string;
  public orderItems?: OrderItemDto[];

  constructor(builder: CreateOrderRequestDtoBuilder) {
    this.customerId = builder.customerId ?? '';
    this.orderItems = builder.orderItems ?? [];
  }
}

export class CreateOrderRequestDtoBuilder {
  public customerId?: string;
  public orderItems?: OrderItemDto[];

  setCustomerId(customerId: string): CreateOrderRequestDtoBuilder {
    this.customerId = customerId;
    return this;
  }

  setOrderItems(orderItems: OrderItemDto[]): CreateOrderRequestDtoBuilder {
    this.orderItems = orderItems;
    return this;
  }

  build(): CreateOrderRequestDto {
    return new CreateOrderRequestDto(this);
  }
}
