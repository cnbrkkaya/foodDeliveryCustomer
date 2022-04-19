import { View, Text, Image } from 'react-native'
//Styles
import { styles } from './styles'

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.details}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </View>
  )
}

export default OrderListItem
