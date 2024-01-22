import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductForm({ product, setModal, setRefresh }) {
    const { data, setData, post, patch, delete: destroy } = useForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        categories: product.categories || [],
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
            className="flex flex-col justify-center w-96 h-96"
            onSubmit={handleOnSubmit}
        >
            <label>Nome</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
            />
            <label>Descrição</label>
            <textarea
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                required
            ></textarea>
            <label>Preço</label>
            <input
                type="number"
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
                required
            />
            <label>Categoria</label>
            
            <select required multiple  value={data.categories} onChange={e => {
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
        </form>
    );
}
