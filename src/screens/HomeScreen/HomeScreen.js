import { FlatList, View } from 'react-native'
//Components
import RestaurantItem from '../../components/RestaurantItem'
//Data
import restaurants from '../../../assets/data/restaurants.json'
//Styles
import { styles } from './styles'

export default function HomeScreen() {
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
