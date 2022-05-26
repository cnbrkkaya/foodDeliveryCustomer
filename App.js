import { StatusBar } from 'expo-status-bar'
//Navigation
import RootNavigator from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'
//Contexts
import AuthContextProvider from './src/contexts/AuthContext'
import BasketContextProvider from './src/contexts/BasketContext'
// import OrderContextProvider from "./src/contexts/OrderContext"
//Amplify
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'

//Amplify Configuration
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } })

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          {/* <OrderContextProvider> */}
          <RootNavigator />
          {/* </OrderContextProvider> */}
        </BasketContextProvider>
      </AuthContextProvider>

      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
export default withAuthenticator(App, { usernameAttributes: 'email' })
