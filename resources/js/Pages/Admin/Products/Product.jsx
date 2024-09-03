import CategoryBadge from '@/Components/CategoryBadge'
import CategoryDropDown from '@/Components/CategoryDropDown'
import DangerButton from '@/Components/DangerButton'
import InputLabel from '@/Components/InputLabel'
import NavLink from '@/Components/NavLink'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function Product({ product, productCategories, allCategories }) {
  const [categoriesSet, setCategoriesSet] = useState(productCategories) 
  const { delete: destroy, post, data, setData } = useForm({
    name: product.name,
    description: product.description,
    price: product.price,
    categories: categoriesSet,
    thumbnail: ''
  })
  const [image, setImage] = useState(null);

  useEffect(() => {
    setData('categories', categoriesSet)
  }, [categoriesSet])

  const changeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setData('thumbnail', e.target.files[0])
  }

  const deleteProduct = () => {
    confirm('Tem certeza que deseja excluir este produto?') && destroy(route('products.destroy', product)) 
  }

  const saveProduct = () => {
    post(route('products.update', product.id))
  }

  return (
    <div className='min-h-full w-full flex flex-col items-center justify-center'>
        <div className='w-full'>
          <div className='flex justify-between max-w-2xl m-auto'>
            <NavLink href={route('admin.products')} className='text-blue-700'>Voltar</NavLink>
            <h1 className='text-blue-700 bold text-xl'>Editar produto</h1>
          </div>
        </div>
        <div className='max-w-xl w-full border p-5 rounded-md border-blue-700'>
            <form className='flex flex-col gap-5 w-full'>
              <div className='relative'>
                  <img src={image ? image : product.thumbnail} alt={`Imagem do produto ${product.name}`}/>
                  <label 
                    htmlFor="thumbnail"
                    className='absolute bottom-0 right-0 bg-blue-700 text-white p-2 rounded-md cursor-pointer'
                  >Editar</label>
                  <input 
                    type="file" 
                    name="thumbnail" 
                    id='thumbnail'
                    className='invisible' 
                    onChange={changeImage}
                  />
              </div>

              <div>
                <InputLabel value="Nome do produto"/>
                <TextInput 
                  type="text" 
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                />
              </div>

              <div>
                <InputLabel value="Descrição do produto"/>
                <TextArea 
                  value={data.description} 
                  onChange={(e) => setData('description', e.target.value)}
                />
              </div>

              <div>
                <InputLabel value="Preço do produto"/>
                <TextInput 
                  value={data.price}
                  onChange={(e) => setData('price', e.target.value)}
                />
              </div>

              <div>
                <InputLabel value='Categoria(s)' />
                <CategoryDropDown categories={allCategories} setCategoriesSet={setCategoriesSet} categoriesSet={categoriesSet}/>
              </div>

              <div className='flex gap-2'>
                <DangerButton value="Excluir produto" onClick={deleteProduct}>Excluir produto</DangerButton>
                <PrimaryButton value="Salvar alterações" onClick={saveProduct} type='button'>Salvar alterações</PrimaryButton>
              </div>
            </form>
        </div>
    </div>
  )
}
