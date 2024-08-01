import CreateProductForm from './CreateProductForm'

export default function CreateProduct({ categories }) {

  return (
    <div className='min-h-full w-full flex flex-col items-center justify-center py-10'>
        <div>
            <h1>Criar produto</h1>
        </div>
        <div className='max-w-xl w-full border p-5 rounded-md border-blue-700'>
            <CreateProductForm categories={categories}/>
        </div>
    </div>
  )
}
