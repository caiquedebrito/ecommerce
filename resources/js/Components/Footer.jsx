import React from 'react'
import ApplicationLogo from './ApplicationLogo'

import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-10 w-full">
      <div>
        <ApplicationLogo />

        <div className='flex gap-5 my-5'>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />

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
          <li className='font-bold text-base mb-2'>Minha Conta</li>
          <li><a href="" className='hover:underline'>Meus pedidos</a></li>
          <li><a href="" className='hover:underline'>Meu perfil</a></li>
        </ul>

        <ul>
          <li className='font-bold text-base mb-2'>Contato</li>
          <li><a href="" className='hover:underline'>Email: lancheepxresso@gmail.com</a></li>
          <li><a href="" className='hover:underline'>Telefone: 75 9 9999-9999</a></li>
        </ul>
      </div>
    </footer>
  )
}
