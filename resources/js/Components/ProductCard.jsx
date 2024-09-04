import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function ProductCard({ product, admPage = false }) {

    return (
        <div className="h-96 w-64 flex flex-col justify-between items-center border rounded-md p-1">
            <a href={admPage ? route('admin.product', product.id) : route('products.show', product.id)} className="contents">
                <div className="flex flex-col justify-between items-center">
                    <img src={product.thumbnail} alt={`Imagem do produto ${product.name}`} className="h-64 w-72" />
                    <h3 className="text-xl">{product.name}</h3>
                    <span className="text-xl font-bold">R$ {product.price}</span>
                    
                </div>
            </a>
            <PrimaryButton className="block w-full text-center">
                Comprar
            </PrimaryButton>
        </div>
    );
}
