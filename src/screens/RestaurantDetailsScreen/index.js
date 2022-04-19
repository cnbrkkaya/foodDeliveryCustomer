import { View, FlatList, StyleSheet } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import MenuListItem from '../../components/MenuListItem'
import RestaurantHeader from './RestaurantHeader'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
const restaurant = restaurants[0]

export default function RestaurantDetailsScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => (
          <MenuListItem menu={item} keyExtractor={(item) => item.name} />
        )}
      />
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
      />
    </View>
  )
}
