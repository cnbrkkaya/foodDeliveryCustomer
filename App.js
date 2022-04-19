import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen'
import MenuDetailsScreen from './src/screens/MenuDetailsScreen'
import CartScreen from './src/screens/CartScreen'
import OrdersScreen from './src/screens/OrdersScreen'
import OrderDetailsScreen from './src/screens/OrderDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      <MenuDetailsScreen />
      {/* <CartScreen /> */}
      {/* <OrdersScreen /> */}
      {/* <OrderDetailsScreen /> */}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
