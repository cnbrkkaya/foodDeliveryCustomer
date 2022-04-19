import { View, Text, StyleSheet } from 'react-native'
//Styles
import { styles } from './styles'

export default function BasketMenuItem({ basketMenuItem }) {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: '600' }}>{basketMenuItem.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>$ {basketMenuItem.price}</Text>
    </View>
  )
}
