import { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native'
//Components
import MenuListItem from '../../components/MenuListItem'
import RestaurantHeader from './RestaurantHeader'
//Icons
import { Ionicons } from '@expo/vector-icons'
//Styles
import styles from './styles'
//Route and navigation
import { useRoute, useNavigation } from '@react-navigation/native'
//import datastore and Restaurant model
import { DataStore } from 'aws-amplify'
import { Restaurant, Menu } from '../../models'
//Contexts
import { useBasketContext } from '../../contexts/BasketContext'

export default function RestaurantDetailsScreen() {
  const [restaurant, setRestaurant] = useState(null)
  const [menus, setMenus] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id

  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketMenus,
  } = useBasketContext()

  useEffect(() => {
    if (id) {
      getRestaurantAndMenu()
    }
  }, [id])

  async function getRestaurantAndMenu() {
    setBasketRestaurant(null)
    // fetch the restaurant with the id
    const restaurant = await DataStore.query(Restaurant, id)
    const menus = await DataStore.query(Menu, (menu) =>
      menu.restaurantID('eq', id)
    )
    setRestaurant(restaurant)
    setMenus(menus)
  }

  useEffect(() => {
    setBasketRestaurant(restaurant)
  }, [restaurant])

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
      {basket && (
        <Pressable
          onPress={() => navigation.navigate('Basket')}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Open basket ({basketMenus.length})
          </Text>
        </Pressable>
      )}
    </View>
  )
}
