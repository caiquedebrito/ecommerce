import React from 'react'
import ApplicationLogo from './ApplicationLogo'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-10">
      <div>
        <ApplicationLogo />

        <div>

        </div>
      </div>

      <div className="flex justify-between">
        <ul>
          <li>Institucional</li>
          <li><a href="">Sobre o lanche expresso</a></li>
          <li><a href="">Política de privacidade</a></li>
          <li><a href="">Termos de uso</a></li>
        </ul>
        <ul>
          <li>Atendimento</li>
          <li><a href="">Sobre o lanche expresso</a></li>
          <li><a href="">Política de privacidade</a></li>
          <li><a href="">Termos de uso</a></li>
        </ul>
        <ul>
          <li>Institucional</li>
          <li><a href="">Sobre o lanche expresso</a></li>
          <li><a href="">Política de privacidade</a></li>
          <li><a href="">Termos de uso</a></li>
        </ul>
      </div>
    </footer>
  )
}
