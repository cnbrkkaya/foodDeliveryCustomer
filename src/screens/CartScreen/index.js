import { View, Text, StyleSheet, FlatList } from 'react-native'
import CartMenuItem from '../../components/CartMenuItem'

import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0]

export default function CartScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>
        Your items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <CartMenuItem cartMenuItem={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
})