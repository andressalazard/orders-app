export class CreateOrderItemRequestDto {
  public productId?: string;
  public productName?: string;
  public quantity?: number;
  public unitPrice?: number;

  constructor(builder: CreateOrderItemRequestDtoBuilder) {
    this.productId = builder.productId ?? '';
    this.productName = builder.productName ?? '';
    this.quantity = builder.quantity ?? 0;
    this.unitPrice = builder.unitPrice ?? 0;
  }
}

export class CreateOrderItemRequestDtoBuilder {
  public productId?: string;
  public productName?: string;
  public quantity?: number;
  public unitPrice?: number;

  setProductId(productId: string): CreateOrderItemRequestDtoBuilder {
    this.productId = productId;
    return this;
  }

  setProductName(productName: string): CreateOrderItemRequestDtoBuilder {
    this.productName = productName;
    return this;
  }

  setQuantity(quantity: number): CreateOrderItemRequestDtoBuilder {
    this.quantity = quantity;
    return this;
  }

  setUnitPrice(unitPrice: number): CreateOrderItemRequestDtoBuilder {
    this.unitPrice = unitPrice;
    return this;
  }

  build(): CreateOrderItemRequestDto {
    return new CreateOrderItemRequestDto(this);
  }
}
