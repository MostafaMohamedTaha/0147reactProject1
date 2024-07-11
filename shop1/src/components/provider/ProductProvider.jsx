import React , { createContext, useEffect, useState } from "react"

export const ProductContext=createContext()
const ProductProvider = ({children}) => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        const fetchProducts=async ()=>{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json()
            setProduct(data)
        }
        fetchProducts()
    },[])
    return <ProductContext.Provider value={{product}}>
        {children}
        </ProductContext.Provider>
}
export default ProductProvider;