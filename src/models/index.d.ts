import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}



type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketMenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Basket {
  readonly id: string;
  readonly BasketMenus?: (BasketMenu | null)[];
  readonly userID: string;
  readonly restaurantID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class BasketMenu {
  readonly id: string;
  readonly quantity: number;
  readonly Menu?: Menu;
  readonly basketID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly basketMenuMenuId?: string;
  constructor(init: ModelInit<BasketMenu, BasketMenuMetaData>);
  static copyOf(source: BasketMenu, mutator: (draft: MutableModel<BasketMenu, BasketMenuMetaData>) => MutableModel<BasketMenu, BasketMenuMetaData> | void): BasketMenu;
}

export declare class Menu {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly description?: string;
  readonly price: number;
  readonly restaurantID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Menu, MenuMetaData>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}

export declare class OrderMenu {
  readonly id: string;
  readonly quantity: number;
  readonly Menu?: Menu;
  readonly orderID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly orderMenuMenuId?: string;
  constructor(init: ModelInit<OrderMenu, OrderMenuMetaData>);
  static copyOf(source: OrderMenu, mutator: (draft: MutableModel<OrderMenu, OrderMenuMetaData>) => MutableModel<OrderMenu, OrderMenuMetaData> | void): OrderMenu;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Restaurant?: Restaurant;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderMenus?: (OrderMenu | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly orderRestaurantId?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Menus?: (Menu | null)[];
  readonly Baskets?: (Basket | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[];
  readonly Baskets?: (Basket | null)[];
  readonly sub: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}