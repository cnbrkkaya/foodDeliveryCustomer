import { View, Text } from 'react-native'
//Styles
import { styles } from './styles'

export default function BasketMenuItem({ basketMenuItem }) {
  console.warn('basketMenuItem', basketMenuItem)
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketMenuItem.quantity}</Text>
      </View>
      <Text style={{ fontWeight: '600' }}>{basketMenuItem.Menu.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>$ {basketMenuItem.Menu.price}</Text>
    </View>
  )
}
