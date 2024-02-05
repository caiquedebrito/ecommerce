import React from 'react'
import ApplicationLogo from './ApplicationLogo'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-10 w-full">
      <div>
        <ApplicationLogo />

        <div>

        </div>
      </div>

      <div className="flex justify-between mt-5 text-sm flex-wrap gap-5">
        <ul>
          <li className='font-bold text-base mb-2'>Institucional</li>
          <li><a href="" className='hover:underline'>Sobre o lanche expresso</a></li>
          <li><a href="" className='hover:underline'>Política de privacidade</a></li>
          <li><a href="" className='hover:underline'>Termos de uso</a></li>
        </ul>
        <ul>
          <li className='font-bold text-base mb-2'>Atendimento</li>
          <li><a href="" className='hover:underline'>Sobre o lanche expresso</a></li>
          <li><a href="" className='hover:underline'>Política de privacidade</a></li>
          <li><a href="" className='hover:underline'>Termos de uso</a></li>
        </ul>
        <ul>
          <li className='font-bold text-base mb-2'>Institucional</li>
          <li><a href="" className='hover:underline'>Sobre o lanche expresso</a></li>
          <li><a href="" className='hover:underline'>Política de privacidade</a></li>
          <li><a href="" className='hover:underline'>Termos de uso</a></li>
        </ul>
      </div>
    </footer>
  )
}
