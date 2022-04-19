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
//Route
import { useRoute } from '@react-navigation/native'
//navigation
import { useNavigation } from '@react-navigation/native'

const restaurant = restaurants[0]

export default function RestaurantDetailsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id

  const restaurant = restaurants.find((restaurant) => restaurant.id === id)
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
        onPress={() => navigation.goBack()}
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
      />
    </View>
  )
}
