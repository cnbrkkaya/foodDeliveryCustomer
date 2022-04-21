import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//Amplify
import { Auth, DataStore } from 'aws-amplify'
//Models
import { User } from '../../models'
//useAuth
import { useAuthContext } from '../../contexts/AuthContext'
//navigation
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
  const { sub, setDbUser, dbUser } = useAuthContext()

  const [name, setName] = useState(dbUser?.name || '')
  const [address, setAddress] = useState(dbUser?.address || '')
  const [lat, setLat] = useState((dbUser && (dbUser?.lat).toString()) || '0')
  const [lng, setLng] = useState((dbUser && (dbUser?.lng).toString()) || '0')

  const navigation = useNavigation()

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
      await createUser()
    }
    navigation.goBack()
  }
  console.log('a')
  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      )
      setDbUser(user)
    } catch (e) {
      Alert.alert('Error', e.message)
    }
  }

  const updateUser = async () => {
    try {
      const user = await DataStore.save(
        User.copyOf(dbUser, (updated) => {
          updated.name = name
          updated.address = address
          updated.lat = parseFloat(lat)
          updated.lng = parseFloat(lng)
        })
      )
      setDbUser(user)
    } catch (e) {
      Alert.alert('Error', e.message)
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Name'
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder='Address'
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder='Latitude'
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder='Longitude'
        style={styles.input}
        keyboardType='numeric'
      />
      <Button onPress={onSave} title='Save' />
      <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: 'center', color: 'red', margin: 10 }}>
        Sign out
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
})
