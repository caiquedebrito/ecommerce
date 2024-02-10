import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductForm({ product, setModal, setRefresh }) {
    const { data, setData, post, patch, delete: destroy } = useForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        categories: product.categories || [],
        thumbnail: null,
    });

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (product.id) {
            patch(route("products.update", product.id));
            
        } else {
            post(route("products.store"));
        }

        setModal(false)
        setRefresh(true)
    };

    const deleteProduct = () => {
        destroy(route("products.destroy", product.id));
        setModal(false)
        setRefresh(true)
    }

    return (
        <form
            className="flex flex-col "
            onSubmit={handleOnSubmit}
        >
            <label>Nome</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
            />
            <InputLabel>Descrição</InputLabel>
            <textarea
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                required
            ></textarea>
            <InputLabel>Preço</InputLabel>
            <input
                type="number"
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
                required
            />

            <InputLabel>Capa</InputLabel>
            <input type="file" name="thumbnail" onChange={(e) => setData("thumbnail", e.target.files[0])}/>

            <label>Categoria</label>
            
            <select className="no-scroll" required multiple  value={data.categories} onChange={e => {
                if (data.categories.includes(e.target.value)) {
                    setData("categories", data.categories.filter(category => category !== e.target.value))
                    return
                }

                setData("categories", [...data.categories, e.target.value])
            }}>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <PrimaryButton type="submit" className="mt-5">Salvar</PrimaryButton>
            { product.id ? <PrimaryButton className="mt-5" onClick={deleteProduct} type="button">Apagar</PrimaryButton> : null  }
            <SecondaryButton className="mt-5" onClick={() => setModal(false)}>Cancelar</SecondaryButton>
        </form>
    );
}
