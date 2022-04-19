import { View, FlatList, StyleSheet } from 'react-native'
//Components
import OrderListItem from '../../components/OrderListItem'
//Data
import orders from '../../../assets/data/orders.json'
//Styles
import { styles } from './styles'

export default function OrdersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  )
}
