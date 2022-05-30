import { createContext, useState, useEffect, useContext } from 'react'
import { DataStore } from 'aws-amplify'
import { Basket, BasketMenu } from '../models'
import { useAuthContext } from './AuthContext'

const BasketContext = createContext({})

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext()

  const [restaurant, setRestaurant] = useState(null)
  const [basket, setBasket] = useState(null)
  const [basketMenus, setBasketMenus] = useState([])

  const totalPrice = basketMenus.reduce(
    (sum, basketMenu) => sum + basketMenu.quantity * basketMenu.Menu.price,
    restaurant?.deliveryFee
  )

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID('eq', restaurant.id).userID('eq', dbUser.id)
    ).then((baskets) => setBasket(baskets[0]))
  }, [dbUser, restaurant])

  useEffect(() => {
    if (basket) {
      DataStore.query(BasketMenu, (bd) => bd.basketID('eq', basket.id)).then(
        setBasketMenus
      )
    }
  }, [basket])

  const addMenuToBasket = async (menu, quantity) => {
    // get the existing basket or create a new one
    let theBasket = basket || (await createNewBasket())

    // create a BasketMenu item and save to Datastore
    const newMenu = await DataStore.save(
      new BasketMenu({ quantity, Menu: menu, basketID: theBasket.id })
    )

    setBasketMenus([...basketMenus, newMenu])
  }

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    )
    setBasket(newBasket)
    return newBasket
  }

  return (
    <BasketContext.Provider
      value={{
        addMenuToBasket,
        setRestaurant,
        restaurant,
        basket,
        basketMenus,
        totalPrice,
      }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)
