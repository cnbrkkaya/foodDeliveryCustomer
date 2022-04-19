import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import restaurants from '../../../assets/data/restaurants.json'

const menu = restaurants[0].dishes[0]

export default function MenuDetailsScreen() {
  const [quantity, setQuantity] = useState(1)

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function increment() {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }
  function calculateTotal() {
    return (quantity * menu.price).toFixed(2)
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{menu.name}</Text>
      <Text style={styles.description}>{menu.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name='minuscircleo'
          size={60}
          color={'black'}
          onPress={decrement}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name='pluscircleo'
          size={60}
          color={'black'}
          onPress={increment}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${calculateTotal()}
        </Text>
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
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
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
