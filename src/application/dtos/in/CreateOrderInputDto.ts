export class CreateOrderInputDto {
  customerId!: string;
  orderItems!: {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
  }[];

  constructor(init?: Partial<CreateOrderInputDto>) {
    Object.assign(this, init);
  }
}
