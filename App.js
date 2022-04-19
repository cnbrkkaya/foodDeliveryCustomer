import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen'
import MenuDetailsScreen from './src/screens/MenuDetailsScreen'
import BasketScreen from './src/screens/BasketScreen'
import OrdersScreen from './src/screens/OrdersScreen'
import OrderDetailsScreen from './src/screens/OrderDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <MenuDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrdersScreen /> */}
      <OrderDetailsScreen />
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
