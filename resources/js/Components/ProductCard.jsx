import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function ProductCard({ product, admPage = false }) {

    return (
        <a href={admPage ? route('admin.product', product.id) : route('products.show', product.id)}>
            <div className="h-96 w-64 flex flex-col justify-between items-center border rounded-md p-1">
                <img src={product.thumbnail} alt={`Imagem do produto ${product.name}`} className="h-64 w-72" />
                <h3 className="text-xl">{product.name}</h3>
                <span className="text-xl font-bold">R$ {product.price}</span>
                <PrimaryButton className="block w-full text-center">
                    Comprar
                </PrimaryButton>
            </div>
        </a>
    );
}
