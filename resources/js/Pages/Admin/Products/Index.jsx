import Header from '@/Components/Admin/Header'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Index({ products }) {    
  return (
    <AdminLayout>
        <header className='flex justify-between px-10'>
            <h1 className='text-black text-2xl'>Sessão dos Produtos</h1>
            <Link href={route('admin.product.create')} className='bg-orange-400 py-2 px-4 text-white rounded-sm'>Criar Novo produto</Link>
        </header>

        <session className='flex flex-wrap px-10 mt-10 min-h-full min-w-full'>
            {
            products.map((product) => {
                return (
                    <a href={route('admin.product', product.id)} key={product.id}>
                        <div className="flex flex-col justify-between items-center border rounded-md p-1">
                            <img src={product.thumbnail} alt={`Imagem do produto ${product.name}`} className="h-32 w-48" />
                            <h3 className="text-xs">{product.name}</h3>
                            <span className="text-xs font-bold">R$ {product.price}</span>
                        </div>
                    </a>
                )
            })
            } 
        </session>
    </AdminLayout>
  )
}
