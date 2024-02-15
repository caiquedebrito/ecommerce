import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import React, { useState } from 'react'

export default function Product({ product }) {

    const [quantity, setQuantity] = useState(1)

    const addToCart = () => {
        console.log({ quantity, product, total: quantity * product.price})
        if (localStorage.getItem('cart') !== null) {
            const cart = JSON.parse(localStorage.getItem('cart'))
            cart.push({ quantity, ...product })
            localStorage.setItem('cart', JSON.stringify(cart))
            return
        }

        localStorage.setItem('cart', JSON.stringify([{ quantity, ...product}]))
    }
    
  return (
    <div className="flex flex-col justify-between min-h-screen items-center">
        <Header />
        
        <div className='py-5 flex gap-20 flex-wrap justify-center'>
            <div>
                <img src={product.thumbnail} alt={product.name} className='w-64 h-72'/>
            </div>
            <div className='flex flex-col justify-between'>
                <h1 className='font-bold text-6xl capitalize'>{product.name}</h1>
                <p>{product.description}</p>
                <span className='font-bold text-orange-600 text-4xl'>R$ {product.price}</span>

                <div>
                    <span>Quantidade</span>
                    <TextInput min="1" max="20" type="number" className="w-[100px] mx-4" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                        {/* <SecondaryButton>+</SecondaryButton> */}
                </div>

                <PrimaryButton>Comprar</PrimaryButton>
                <SecondaryButton onClick={addToCart}>Adicionar no carrinho</SecondaryButton>
            </div>
        </div>

        <Footer />
    </div>
  )
}
