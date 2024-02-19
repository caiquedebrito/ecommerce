import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import NavLink from '@/Components/NavLink'
import PrimaryButton from '@/Components/PrimaryButton'
import React, { useEffect, useState } from 'react'

export default function ShoppingCart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    setCart(cart)
  }, [])

  const handleDelete = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);

    if (newCart.length === 0) {
      localStorage.removeItem('cart');
      return;
    } else {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <div className='flex flex-col items-center py-10'>
        {
          !!cart ? (cart.map(item => (
            <div className='flex gap-4' key={item.id}>
              <img src={item.thumbnail} alt={item.name} className='w-32 h-32' />
              <div>
                <h1 className='font-bold text-3xl'>{item.name}</h1>
                <p>{item.description}</p>
                <span className='font-bold text-orange-600 text-2xl'>R$ {item.price}</span>
                <div className='flex gap-4'>
                  <span>Quantidade</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className='w-16'
                    min={1}
                  />
                </div>
                <button onClick={() => handleDelete(item.id)} className='mt-4 bg-red-500 text-white px-4 py-2 rounded'>Deletar</button>
              </div>
            </div>
             
          )) && <PrimaryButton className='mt-5'>Finalizar compra</PrimaryButton>) : (<>
            <p>Nenhum item no carrinho</p>
            <NavLink href={route("home")}>Ir as compras</NavLink>
          </>)
        }
       
      </div>
      <Footer />
    </div>
  )
}
