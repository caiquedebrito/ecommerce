import Header from '@/Components/Admin/Header'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Index({ products }) {    
  return (
    <div>
        <Header />

        <div className='flex justify-between px-10'>
            <h1 className='text-black text-2xl'>Produtos</h1>
            <Link href={route('admin.product.create')}>Novo produto</Link>
        </div>

        <div className='flex px-10 mt-10'>
           {
            products.map((product, index) => {
                return (
                    <a href={route('admin.product', product.id)}>
                        <div className="flex flex-col justify-between items-center border rounded-md p-1">
                            <img src={product.thumbnail} alt={`Imagem do produto ${product.name}`} className="h-32 w-48" />
                            <h3 className="text-xl">{product.name}</h3>
                            <span className="text-xl font-bold">R$ {product.price}</span>
                        </div>
                    </a>
                )
            })
           } 
        </div>
    </div>
  )
}
