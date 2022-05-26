import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//Screens
import HomeScreen from '../screens/HomeScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import MenuDetailsScreen from '../screens/MenuDetailsScreen'
import BasketScreen from '../screens/BasketScreen'
import OrdersScreen from '../screens/OrdersScreen'
import OrderDetailsScreen from '../screens/OrderDetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'
//Context
import { useAuthContext } from '../contexts/AuthContext'
//Icons
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const { dbUser } = useAuthContext()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
      ) : (
        <Stack.Screen name='Profile' component={ProfileScreen} />
      )}
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list-alt' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Restaurants' component={HomeScreen} />
      <HomeStack.Screen
        name='Restaurant'
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name='Menu' component={MenuDetailsScreen} />
      <HomeStack.Screen name='Basket' component={BasketScreen} />
    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name='Orders' component={OrdersScreen} />
      <OrdersStack.Screen name='Order' component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  )
}

export default RootNavigator
