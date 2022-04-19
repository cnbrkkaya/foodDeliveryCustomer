import { View, FlatList } from 'react-native'
//Components
import MenuListItem from '../../components/MenuListItem'
import RestaurantHeader from './RestaurantHeader'
//Icons
import { Ionicons } from '@expo/vector-icons'
//Styles
import styles from './styles'
//Data
import restaurants from '../../../assets/data/restaurants.json'
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
        keyExtractor={(item) => item.name}
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
