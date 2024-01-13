
import NavLink from '@/Components/NavLink';
import React from 'react'

export default function Admin() {

  return (
    <div>Admin page, Welcome <NavLink className='text-black' href={route('admin.logout')}>Log out</NavLink></div>
  )
}
