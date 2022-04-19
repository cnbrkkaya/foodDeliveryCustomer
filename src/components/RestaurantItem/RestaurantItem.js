import { Text, View, Image, Pressable } from 'react-native'
//Styles
import { styles } from './styles'
//Navigation
import { useNavigation } from '@react-navigation/native'

export default function RestaurantItem({ restaurant }) {
  const navigation = useNavigation()

  function onPress() {
    navigation.navigate('Restaurant', { id: restaurant.id })
  }

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            $ {restaurant.deliveryFee.toFixed(1)} &#8226;{' '}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  )
}
