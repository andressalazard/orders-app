export class CreateOrderResponseDto {
  orderId!: string;
  customerId!: string;
  orderItems!: {
    productId?: string;
    quantity: number;
    unitPrice: number;
  }[];
  totalAmount!: number;
  orderStatus!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(init?: Partial<CreateOrderResponseDto>) {
    Object.assign(this, init);
  }
}
