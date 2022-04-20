// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Menu, Restaurant } = initSchema(schema);

export {
  Menu,
  Restaurant
};