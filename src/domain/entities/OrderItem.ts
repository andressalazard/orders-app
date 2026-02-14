export class OrderItem {
  public productId?: string;
  public productName?: string;
  public quantity?: number;
  public unitPrice?: number;

  constructor(builder: OrderItemBuilder) {
    this.productId = builder.productId ?? '';
    this.productName = builder.productName ?? '';
    this.quantity = builder.quantity ?? 0;
    this.unitPrice = builder.unitPrice ?? 0;
  }

  //business logic here
  checkQuantityMustBePositive(): boolean {
    if (!this.quantity) return true;
    return (this.quantity ?? 0) > 0;
  }

  checkUnitPriceMustBePositive(): boolean {
    if (!this.unitPrice) return true;
    return (this.unitPrice ?? 0) > 0;
  }
}

export class OrderItemBuilder {
  public productId?: string;
  public productName?: string;
  public quantity?: number;
  public unitPrice?: number;

  setProductId(productId: string): OrderItemBuilder {
    this.productId = productId;
    return this;
  }

  setProductName(productName: string): OrderItemBuilder {
    this.productName = productName;
    return this;
  }

  setQuantity(quantity: number): OrderItemBuilder {
    this.quantity = quantity;
    return this;
  }

  setUnitPrice(unitPrice: number): OrderItemBuilder {
    this.unitPrice = unitPrice;
    return this;
  }

  build(): OrderItem {
    return new OrderItem(this);
  }
}
