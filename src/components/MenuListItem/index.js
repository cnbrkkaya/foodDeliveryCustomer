import { StyleSheet, Text, View, Image } from 'react-native'

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
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  description: {
    color: 'grey',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    // flex: 0.5,
    width: 100,
    height: 100,
  },
})
