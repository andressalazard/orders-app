import { randomUUID, UUID } from 'node:crypto';
import { OrderItem } from './OrderItem';
import { OrderStatusEnum } from '../enums/OrderStatusEnum';

export class Order {
  public orderId?: UUID;
  public customerId?: string;
  public orderItems?: OrderItem[];
  public totalAmount: number;
  public orderStatus?: OrderStatusEnum;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(builder: OrderBuilder) {
    this.orderId = builder.orderId ?? randomUUID();
    this.customerId = builder.customerId ?? '';
    this.orderItems = builder.orderItems ?? [];
    this.totalAmount = builder.totalAmount ?? 0;
    this.orderStatus = builder.orderStatus ?? OrderStatusEnum.PENDING;
    this.createdAt = builder.createdAt ?? new Date();
    this.updatedAt = builder.updatedAt ?? new Date();
  }

  //Business logic here

  orderMustHaveAtLeastOneItem(): boolean {
    return (this.orderItems?.length ?? 0) > 0;
  }

  cannotCancelIfDelivered(): boolean {
    return this.orderStatus === OrderStatusEnum.DELIVERED;
  }

  IDmustBeUUID(): boolean {
    if (!this.orderId) return false;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(this.orderId);
  }
}

export class OrderBuilder {
  public orderId?: UUID;
  public customerId?: string;
  public orderItems?: OrderItem[];
  public totalAmount?: number;
  public orderStatus?: OrderStatusEnum;
  public createdAt?: Date;
  public updatedAt?: Date;

  setOrderId(orderId: UUID): OrderBuilder {
    this.orderId = orderId;
    return this;
  }

  setCustomerId(customerId: string): OrderBuilder {
    this.customerId = customerId;
    return this;
  }

  setOrderItems(orderItems: OrderItem[]): OrderBuilder {
    this.orderItems = orderItems;
    return this;
  }

  setTotalAmount(): OrderBuilder {
    this.totalAmount = this.calculateTotalAmount();
    return this;
  }

  setOrderStatus(orderStatus: OrderStatusEnum): OrderBuilder {
    this.orderStatus = orderStatus;
    return this;
  }

  setCreatedAt(createdAt: Date): OrderBuilder {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): OrderBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  calculateTotalAmount(): number {
    if (!this.orderItems) return 0;
    return this.orderItems.reduce((total, item) => {
      return total + (item.quantity ?? 0) * (item.unitPrice ?? 0);
    }, 0);
  }

  build(): Order {
    return new Order(this);
  }
}
