import { Text, View, Image } from 'react-native'
//Styles
import { styles } from './styles'

export default function RestaurantItem({ restaurant }) {
  return (
    <View style={styles.restaurantContainer}>
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
    </View>
  )
}
