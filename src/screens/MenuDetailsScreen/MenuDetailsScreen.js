import { useState, useEffect } from 'react'
import { View, Text, Pressable, ActivityIndicator } from 'react-native'
//Icons
import { AntDesign } from '@expo/vector-icons'
//Styles
import { styles } from './styles'
//naviagtion
import { useNavigation, useRoute } from '@react-navigation/native'
//import datastore and Menu model
import { DataStore } from 'aws-amplify'
import { Menu } from '../../models'
//Contexts
import { useBasketContext } from '../../contexts/BasketContext'

export default function MenuDetailsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id
  const [quantity, setQuantity] = useState(1)
  const [menu, setMenu] = useState(null)
  const { addMenuToBasket } = useBasketContext()

  async function getMenu() {
    const menu = await DataStore.query(Menu, id)
    setMenu(menu)
  }

  useEffect(() => {
    if (id) {
      getMenu()
    }
  }, [id])

  async function handleAddToBasket() {
    await addMenuToBasket(menu, quantity)
    navigation.goBack()
  }

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

  if (!menu) {
    return <ActivityIndicator size={'large'} color={'gray'} />
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
      <Pressable onPress={handleAddToBasket} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${calculateTotal()}
        </Text>
      </Pressable>
    </View>
  )
}
