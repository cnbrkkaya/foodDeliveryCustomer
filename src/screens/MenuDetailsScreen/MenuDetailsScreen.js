import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
//Icons
import { AntDesign } from '@expo/vector-icons'
//Data
import restaurants from '../../../assets/data/restaurants.json'
//Styles
import { styles } from './styles'
//naviagtion
import { useNavigation } from '@react-navigation/native'

const menu = restaurants[0].dishes[0]

export default function MenuDetailsScreen() {
  const navigation = useNavigation()
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
      <Pressable
        onPress={() => navigation.navigate('Basket')}
        style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${calculateTotal()}
        </Text>
      </Pressable>
    </View>
  )
}
