import React from 'react'
import './OrderOnline.css'
import menuList from './menuList'
import { MdAddCircle } from 'react-icons/md'
import { MdRemoveCircle } from 'react-icons/md'
import { useEffect } from 'react'

const OrderOnline = () => {
  const [itemCounts, setItemCounts] = React.useState({})
  const [cartItems, setCartItems] = React.useState({})

  const updateItemCount = (menuId, delta) => {
    setItemCounts((prev) => {
      const currentCount = prev[menuId] || 0
      const nextCount = Math.max(0, currentCount + delta)
      return { ...prev, [menuId]: nextCount }
    })
  }

  const addToCart = (menuId) => {
    setCartItems((prev) => ({ ...prev, [menuId]: (prev[menuId] || 0) + 1 }))
  }

  const removeFromCart = (menuId) => {
    setCartItems((prev) => {
      const nextCount = (prev[menuId] || 0) - 1

      if (nextCount <= 0) {
        const { [menuId]: _, ...rest } = prev
        return rest
      }

      return { ...prev, [menuId]: nextCount }
    })
  }

  const handleAdd = (menuId) => {
    updateItemCount(menuId, 1)
    addToCart(menuId)
  }

  const handleRemove = (menuId) => {
    updateItemCount(menuId, -1)
    removeFromCart(menuId)
  }

  const cartCount = Object.values(cartItems).reduce((sum, count) => sum + count, 0)

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <>
      <header className="order-online-header">
        <section>
          <div className="order-online-content">
            <h2>Order Your favourite food here</h2>
            <p>Choose from our delicious menu and order delivery or pickup!</p>
            <p className="cart-summary">Items in cart: {cartCount}</p>
          </div>
        </section>
      </header>
      <div className="explore-menu-container">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Discover our delicious selection of dishes made with the finest ingredients.</p>
        <div className="explore-menu-list">
          {menuList.map((menu) => {
            const itemCount = itemCounts[menu.id] || 0

            return (
              <div key={menu.id} className="explore-menu-items">
                <img src={require(`../../../images/${menu.image}`)} alt={menu.title} />
                {!itemCount ? (
                  <MdAddCircle className='add' onClick={() => handleAdd(menu.id)} />
                ) : (
                  <div className='item-count'>
                    <MdRemoveCircle onClick={() => handleRemove(menu.id)} />
                    <span>{itemCount}</span>
                    <MdAddCircle onClick={() => handleAdd(menu.id)} />
                  </div>
                )}
                <div className="explore-menu-content">
                  <div className="explore-menu-info">
                    <h5>{menu.title}</h5>
                    <p>{menu.price}</p>
                  </div>
                </div>
                <p>{menu.description}</p>
                <button className="order-button" onClick={() => handleAdd(menu.id)}>
                  Order Now
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OrderOnline