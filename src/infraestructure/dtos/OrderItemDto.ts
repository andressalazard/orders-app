export class OrderItemDto {
  public productId?: string;
  public productName?: string;
  public quantity?: number;
  public unitPrice?: number;

  constructor(init?: Partial<OrderItemDto>) {
    Object.assign(this, init);
  }
}
