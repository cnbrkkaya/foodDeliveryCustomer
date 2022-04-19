import { StyleSheet, Text, View, Image } from 'react-native'
//styles
import { styles } from './styles'

export default function MenuListItem({ menu }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{menu.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {menu.description}
        </Text>
        <Text style={styles.price}>$ {menu.price}</Text>
      </View>
      {menu.image && (
        <Image source={{ uri: menu.image }} style={styles.image}></Image>
      )}
    </View>
  )
}
