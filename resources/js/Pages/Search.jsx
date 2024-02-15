import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ProductCard from '@/Components/ProductCard'
import React from 'react'

export default function Search({ products }) {
    console.log(products)
  return (
    <div className='flex flex-col min-h-screen justify-between'>
        <Header />

        <div>
            <h1>Busca</h1>
            <div>
                <h2>Produtos</h2>
                <div className='flex flex-wrap gap-5 justify-between'>
                    {
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}
