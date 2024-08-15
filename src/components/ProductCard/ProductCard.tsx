import React, { createContext } from 'react'
import {
  ProductContextProps, 
  Product, 
  OnChangeArgs, 
  InitialValuesProps, 
  ProductCardHandlersArgs
} from '../../interfaces'
import { useProduct } from '../../hooks/useProduct'

import styles from '../../styles/styles.module.css'
export interface Props {
  product        : Product;
  // children?      : React.ReactElement | React.ReactElement[] |;
  children       : (args: ProductCardHandlersArgs) => JSX.Element;
  className?     : string;
  style?         : React.CSSProperties;
  onChange?      : (args: OnChangeArgs) => void;
  value?         : number;
  initialValues? : InitialValuesProps
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export function ProductCard({ children, product, className = '', style, onChange, value, initialValues } : Props) {

  const { 
    counter, 
    increaseBy, 
    maxCount, 
    isMaxCountReached, 
    reset
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      product,
      counter,
      increaseBy,
      maxCount
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}
