<?php

namespace App\Dtos;

use App\Models\Product;

class ProductDTO {
    function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly float $price,
        public readonly string $thumbnail,
    )
    {}

    public static function create(Product $product): ProductDTO {
        return new self($product->id, $product->name, $product->price, $product->thumbnail);
    }
}