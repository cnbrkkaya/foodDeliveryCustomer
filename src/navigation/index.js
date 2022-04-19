import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Screens
import HomeScreen from '../screens/HomeScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import MenuDetailsScreen from '../screens/MenuDetailsScreen'
import BasketScreen from '../screens/BasketScreen'
import OrdersScreen from '../screens/OrdersScreen'
import OrderDetailsScreen from '../screens/OrderDetailsScreen'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='Restaurant'
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name='MenuDetails' component={MenuDetailsScreen} />
      <Stack.Screen name='Basket' component={BasketScreen} />
      <Stack.Screen name='Orders' component={OrdersScreen} />
      <Stack.Screen name='OrderDetails' component={OrderDetailsScreen} /> */}
    </Stack.Navigator>
  )
}

export default RootNavigator
