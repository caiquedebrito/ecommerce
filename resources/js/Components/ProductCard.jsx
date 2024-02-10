import React from "react";
import Bolo from "../assets/bolo.jpg";
import PrimaryButton from "./PrimaryButton";

export default function ProductCard({ product }) {

    return (
        <a href="">
            <div className="h-96 w-64 flex flex-col justify-between items-center border rounded-md p-1">
                <img src={product.thumbnail} alt="" className="h-64 w-72" />
                <h3 className="text-xl">{product.name}</h3>
                <span className="text-xl font-bold">R$ {product.price}</span>
                <PrimaryButton className="block w-full text-center">
                    Comprar
                </PrimaryButton>
            </div>
        </a>
    );
}
