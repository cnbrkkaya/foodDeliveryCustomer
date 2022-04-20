import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
//Components
import MenuListItem from '../../components/MenuListItem'
import RestaurantHeader from './RestaurantHeader'
//Icons
import { Ionicons } from '@expo/vector-icons'
//Styles
import styles from './styles'
//Route
import { useRoute } from '@react-navigation/native'
//navigation
import { useNavigation } from '@react-navigation/native'
//import datastore and Restaurant model
import { DataStore } from 'aws-amplify'
import { Restaurant, Menu } from '../../models'

export default function RestaurantDetailsScreen() {
  const [restaurant, setRestaurant] = useState(null)
  const [menus, setMenus] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id

  useEffect(() => {
    if (id) {
      getRestaurantAndMenu()
    }
  }, [id])

  async function getRestaurantAndMenu() {
    const restaurant = await DataStore.query(Restaurant, id)
    const menus = await DataStore.query(Menu, (menu) =>
      menu.restaurantID('eq', id)
    )
    setRestaurant(restaurant)
    setMenus(menus)
  }

  if (!restaurant) {
    return <ActivityIndicator size={'large'} color={'gray'} />
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={menus}
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
