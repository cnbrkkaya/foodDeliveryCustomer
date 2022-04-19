import { View, Text, StyleSheet, FlatList } from 'react-native'
//Components
import BasketMenuItem from '../../components/BasketMenuItem'
//Data
import restaurants from '../../../assets/data/restaurants.json'
//Styles
import { styles } from './styles'

const restaurant = restaurants[0]

export default function BasketScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>
        Your items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketMenuItem basketMenuItem={item} />}
        keyExtractor={(item) => item.name}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  )
}
