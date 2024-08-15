import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../../styles/styles.module.css'

export interface Props {
  title?     : string,
  className? : string;
  style?     : React.CSSProperties;
}

export function ProductTitle({ title, className = '', style } : Props ) {
  const { product } = useContext(ProductContext)
  const titleToShow = title ? title : product.title
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
  )
}
