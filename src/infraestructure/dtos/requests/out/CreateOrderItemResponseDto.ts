export class CreateOrderItemResponseDto {
  public productId?: number;
  public quantity?: number;
  public unitPrice?: number;

  constructor(init?: Partial<CreateOrderItemResponseDto>) {
    Object.assign(this, init);
  }
}
