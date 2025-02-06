import React, {createContext, useState} from "react";
import all_product from '../React ecommerce/all_product'

export const Context = createContext(null)

const DefaultCart = ()=>{
    let cart = {};
    for (let i=0; i<all_product.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ContextProvider = (props)=>{
    const[cartItem,setCartItem] = useState(DefaultCart())
    
    const addCart = (Id)=>{
        setCartItem((pre)=>({...pre,[Id]:pre[Id]+1}))
    }
    


    const removeCart = (Id)=>{
        setCartItem((pre)=>({...pre,[Id]:pre[Id]-1}))
    }

    const contextValue = {all_product, cartItem, addCart, removeCart};

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;