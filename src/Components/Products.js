import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'React'
console [Products]
export default function Products() {
    useEffect(()=>{
        axios.get('http://dummyjson.com/products')
        .then(res =>setProducts(res.data.Products))
    }
    console.log(Products)
}
