import { View, FlatList } from 'react-native'
//Components
import OrderListItem from '../../components/OrderListItem'
//Styles
import { styles } from './styles'
//Context
import { useOrderContext } from '../../contexts/OrderContext'

export default function OrdersScreen() {
  const { orders } = useOrderContext()
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  )
}
