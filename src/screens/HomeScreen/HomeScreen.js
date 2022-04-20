import { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native'
//Components
import RestaurantItem from '../../components/RestaurantItem'
//Styles
import { styles } from './styles'
//import datastore and Restaurant model
import { DataStore } from 'aws-amplify'
import { Restaurant } from '../../models'
//import API and graphql queries
import { API, graphqlOperation } from 'aws-amplify'
import { listRestaurants } from '../../graphql/queries'

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([])

  //With DataStore
  const getRestaurants = async () => {
    const restaurants = await DataStore.query(Restaurant)
    setRestaurants(restaurants)
  }
  //With API
  // function getRestaurants() {
  //   API.graphql(graphqlOperation(listRestaurants))
  //     .then((response) => {
  //       const restaurants = response.data.listRestaurants.items
  //       setRestaurants(restaurants)
  //     })
  //     .catch((err) => console.log(err))
  // }
  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
