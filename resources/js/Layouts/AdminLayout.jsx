import Header from '@/Components/Admin/Header'
import React from 'react'

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen min-w-full px-6'>
        {children}
      </main>
    </>
  )
}
