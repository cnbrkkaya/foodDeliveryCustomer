import { View, Text, FlatList, Pressable } from 'react-native'
//Components
import BasketMenuItem from '../../components/BasketMenuItem'
//Styles
import { styles } from './styles'
//navigation
import { useNavigation } from '@react-navigation/native'
//contexts
import { useBasketContext } from '../../contexts/BasketContext'
import { useOrderContext } from '../../contexts/OrderContext'

export default function BasketScreen() {
  const { restaurant, basketDishes, totalPrice } = useBasketContext()
  const { createOrder } = useOrderContext()
  const navigation = useNavigation()

  const onCreateOrder = async () => {
    await createOrder()
    navigation.goBack()
  }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>

      <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>
        Your items
      </Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketMenuItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </Pressable>
    </View>
  )
}
