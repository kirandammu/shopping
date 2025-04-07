import React, { createContext } from 'react'
import all_product from '../../public/all_product'

export const shopContext = createContext()

const Context = (props) => {
  
    const value={all_product}

  return (
    <shopContext.Provider value={value}>
        {props.children}
    </shopContext.Provider>
  )
}

export default Context
