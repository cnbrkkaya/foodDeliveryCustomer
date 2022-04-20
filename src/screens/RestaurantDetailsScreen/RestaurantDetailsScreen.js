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
import { Restaurant } from '../../models'

export default function RestaurantDetailsScreen() {
  const [restaurant, setRestaurant] = useState(null)
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id

  useEffect(() => {
    const getRestaurant = async () => {
      const restaurant = await DataStore.query(Restaurant, id)
      setRestaurant(restaurant)
    }
    getRestaurant()
  }, [])

  if (!restaurant) {
    return <ActivityIndicator size={'large'} color={'gray'} />
  }

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
