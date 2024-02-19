import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, useForm } from '@inertiajs/react'
import axios from 'axios'
import React, { useState } from 'react'

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
    <div className='flex flex-col justify-between min-h-screen items-center'>
      <Head title="Contatos" />
      <Header />
      <div>
        <h1 className=''>Contatos</h1>

        <div>
          <form  className='flex flex-col gap-5' onSubmit={handleSubmit}>
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
      </div>
      <Footer />
    </div>
  )
}
