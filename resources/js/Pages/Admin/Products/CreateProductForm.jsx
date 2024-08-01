import CategoryDropDown from '@/Components/CategoryDropDown'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import { Menu } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import React, { useState } from 'react'

export default function CreateProductForm({ categories }) {
    const [image, setImage] = useState(null);
    const [categoriesSet, setCategoriesSet] = useState([]);
    const { data, setData, post } = useForm({
        name: '',
        description: '',
        price: '',
        categories: [],
        thumbnail: ''
    })

  const changeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setData('thumbnail', e.target.files[0])
  }

  const createProduct = () => {
    if (categoriesSet.length !== 0) {
        setData('categories', categoriesSet)
        post(route('products.store')) 
    }
  }

  return (
    <form className='flex flex-col gap-5 w-full'>
        <div>
            <InputLabel>Nome do produto</InputLabel>
            <TextInput 
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                required
            />
        </div>
        <div>
            <InputLabel>Descrição do produto</InputLabel>
            <TextArea 
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                required
            />
        </div>

        <div>
            <InputLabel>Preço do produto</InputLabel>
            <TextInput 
                type="number"
                value={data.price}
                onChange={(e) => setData('price', e.target.value)}
                required
            />
        </div>

        <div>
            <InputLabel>Categorias</InputLabel>
            <CategoryDropDown categories={categories} categoriesSet={categoriesSet} setCategoriesSet={setCategoriesSet}/>
        </div>

        <div>
            <InputLabel>Imagem do produto</InputLabel>
            {
                image ? <img src={image} alt="" className='w-md h-64 m-auto my-2 rounded-md'/> : null
            }
            <input type="file" name="thumbnail" onChange={changeImage} required/>
        </div>

        <div>
            <PrimaryButton onClick={createProduct} type='button'>Criar produto</PrimaryButton>
        </div>
    </form>
  )
}
