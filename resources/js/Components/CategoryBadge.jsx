import React from 'react'

export default function CategoryBadge({ children, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='border border-orange-600 bold text-blue-700 rounded-lg py-2 px-5'
    >
      {children}
    </button>
  )
}
