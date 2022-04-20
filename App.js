import { StatusBar } from 'expo-status-bar'
//Navigation
import RootNavigator from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'
//Amplify
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
//Amplify Configuration
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } })

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
export default withAuthenticator(App, { usernameAttributes: 'email' })
