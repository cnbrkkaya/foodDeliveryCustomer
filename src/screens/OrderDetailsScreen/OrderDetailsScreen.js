import { View, Text, Image, FlatList } from 'react-native'
//Components
import BasketMenuItem from '../../components/BasketMenuItem'
//Data
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
//Styles
import { styles } from './styles'

const order = orders[0]

function OrderDetailsHeader() {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  )
}

export default function OrderDetails() {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketMenuItem basketMenuItem={item} />}
      keyExtractor={(item) => item.name}
    />
  )
}
