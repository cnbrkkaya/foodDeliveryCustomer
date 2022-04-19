import { View, Text, Image, Pressable } from 'react-native'
//Styles
import { styles } from './styles'
//navigation
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ order }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate('Order', { id: order.id })}
      style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.details}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  )
}

export default OrderListItem
