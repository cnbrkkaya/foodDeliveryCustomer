import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
//styles
import { styles } from './styles'
//navigation
import { useNavigation } from '@react-navigation/native'

export default function MenuListItem({ menu }) {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => navigation.navigate('Menu', { id: menu.id })}
      style={styles.container}>
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
    </Pressable>
  )
}
