import React from 'react'
import CategoryBadge from './CategoryBadge'

export default function CategoryDropDown({ categories, categoriesSet, setCategoriesSet }) {

    const removeCategory = (category) => {
        setCategoriesSet((state) => state.filter(c => c !== category))
    }

    return (
    <>
        <select 
            className='w-full rounded-md' 
            required
            onChange={(e) => {
                if (!categoriesSet.includes(e.target.value)) {
                    setCategoriesSet([...categoriesSet, e.target.value])                    
                }
            }}
        >
            <option value="" defaultValue selected={false}>Selecione uma categoria</option>
            {
                categories.map((categories, index) => {
                    return (
                        <option key={index} value={categories.name}>{categories.name}</option>
                    )
                })
            }
        </select>

        <div className='flex flex-wrap gap-2 mt-5'>
            {
                Array.from(categoriesSet).map((category, index) => {
                    return (
                        <CategoryBadge key={index} onClick={ () => removeCategory(category)}>{category}</CategoryBadge>
                    )
                })
            }
        </div>
    </>
  )
}
