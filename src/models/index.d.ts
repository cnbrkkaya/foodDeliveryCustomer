import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}