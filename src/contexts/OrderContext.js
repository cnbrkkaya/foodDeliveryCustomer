import { createContext, useContext, useState, useEffect } from 'react'
import { DataStore } from 'aws-amplify'
import { Order, OrderMenu, Basket } from '../models'
import { useAuthContext } from './AuthContext'
import { useBasketContext } from './BasketContext'

const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext()
  const { restaurant, totalPrice, basketMenus, basket } = useBasketContext()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID('eq', dbUser.id)).then(setOrders)
  }, [dbUser])

  const createOrder = async () => {
    // create the order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        Restaurant: restaurant,
        status: 'NEW',
        total: totalPrice,
      })
    )

    await Promise.all(
      basketMenus.map((basketMenu) =>
        DataStore.save(
          new OrderMenu({
            quantity: basketMenu.quantity,
            orderID: newOrder.id,
            Menu: basketMenu.Menu,
          })
        )
      )
    )

    // delete basket
    await DataStore.delete(basket)

    setOrders([...orders, newOrder])
  }

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, id)
    const orderMenus = await DataStore.query(OrderMenu, (od) =>
      od.orderID('eq', id)
    )

    return { ...order, menus: orderMenus }
  }

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)
