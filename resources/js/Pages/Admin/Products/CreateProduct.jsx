import AdminLayout from '@/Layouts/AdminLayout'
import CreateProductForm from './CreateProductForm'

export default function CreateProduct({ categories }) {

  return (
    <AdminLayout>
      <h1 className='text-center text-3xl font-bold'>Criar produto</h1>
      <div className='max-w-xl w-full border p-5 rounded-md border-blue-700 mx-auto'>
          <CreateProductForm categories={categories}/>
      </div>
    </AdminLayout>
  )
}
