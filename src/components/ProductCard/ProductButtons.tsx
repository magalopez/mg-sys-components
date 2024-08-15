import React from 'react'
import { useContext, useCallback } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../../styles/styles.module.css'

export interface Props {
  className? : string;
  style?     : React.CSSProperties;
}

export function ProductButtons ({ className = '', style } : Props) {
  const { counter, increaseBy, maxCount } = useContext(ProductContext)

  const handleDecrement = useCallback(() => increaseBy(-1), [increaseBy]);
  const handleIncrement = useCallback(() => increaseBy(1), [increaseBy]);

  const disabledButtonAdd = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

  return (
  <div className={`${styles.buttonsContainer} ${className}`} style={style}>
    <button className={styles.buttonMinus} onClick={handleDecrement}>-</button>
    <div className={styles.countLabel}>{counter}</div>
    <button 
      className={`${styles.buttonAdd} ${disabledButtonAdd() && styles.disabled}`}
      disabled={disabledButtonAdd()}
      onClick={disabledButtonAdd() ? undefined : handleIncrement}>+</button>
  </div>
  )
}
