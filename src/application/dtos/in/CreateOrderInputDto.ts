export class CreateOrderInputDto {
  customerId!: string;
  orderItems!: {
    productId: string;
    quantity: number;
    unitPrice: number;
  }[];
}
