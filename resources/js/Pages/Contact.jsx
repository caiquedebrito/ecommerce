import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head } from '@inertiajs/react'
import axios from 'axios'
import React, { useState } from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

export default function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post('/email', data)
    .then(response => {
      setData({
        name: '',
        email: '',
        message: ''
      })
      alert("Mensagem enviada com sucesso!")
    })
    .catch(error => {
      alert("Erro ao enviar a mensagem!")
      console.log(error)
    })
  }

  return (
    <div className='flex flex-col justify-between min-h-screen items-center gap-10'>
      <Head title="Contatos" />
      <Header />
      <div>
        <h1 className='text-xl font-bold mb-5'>Contatos</h1>

        <div>
          <form  className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <h2 className='text-md'>Envie-nos uma mensagem:</h2>
            <div>
            <InputLabel>Nome</InputLabel>
            <TextInput className="w-full" name="name" value={data.name} onChange={handleChange} required/>
            </div>

            <div>
            <InputLabel>E-mail</InputLabel>
            <TextInput type="email" name="email" className="w-full" value={data.email} onChange={handleChange} required/>
            </div>

            <div>
            <InputLabel>Mensagem</InputLabel>
            <textarea className='w-full rounded-md border-gray-300 resize-none' name="message" value={data.message} onChange={handleChange} required></textarea>
            </div>

            <PrimaryButton className="w-80 text-center block ">
              Enviar
            </PrimaryButton>
          </form>
        </div>

        <div className='my-5'>
          <h2>Siga-nos em nossas redes sociais:</h2>
          <div className='bg-blue-600 p-5 flex justify-between rounded-md'>
            <a href="">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>

          <p className='mt-5'>Email: lancheepxresso@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
