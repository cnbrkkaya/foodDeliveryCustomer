import { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
//Components
import BasketMenuItem from '../../components/BasketMenuItem'
//Styles
import { styles } from './styles'
//Route
import { useRoute } from '@react-navigation/native'
//contexts
import { useOrderContext } from '../../contexts/OrderContext'

const OrderDetailsHeader = ({ order }) => {
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
  const [order, setOrder] = useState()
  const { getOrder } = useOrderContext()
  const route = useRoute()
  const id = route.params?.id

  useEffect(() => {
    getOrder(id).then(setOrder)
  }, [])

  if (!order) {
    return <ActivityIndicator size={'large'} color='gray' />
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.menus}
      renderItem={({ item }) => <BasketMenuItem basketMenuItem={item} />}
      keyExtractor={(item) => item.name}
    />
  )
}
