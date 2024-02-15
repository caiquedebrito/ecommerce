import React, { useState } from 'react'
import TextInput from './TextInput'
import { useForm } from '@inertiajs/react'

export default function SearchInput() {

    const { data, setData, get } = useForm({
        q: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        get(route('products.search'), { q: data.q })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput placeholder="Digite o que você procura..." type="search"  value={data.q} onChange={(e) => setData(
                'q', e.target.value)}/>
        </form>
    )
}
