import { useEffect, useState, useRef } from 'react'
import { InitialValuesProps, OnChangeArgs, Product } from '../interfaces'

interface Args {
  product        : Product; 
  onChange?      : (args: OnChangeArgs) => void;
  value?         : number;
  initialValues? : InitialValuesProps
}

export function useProduct({ onChange, product, value = 0, initialValues } : Args) {
  const isControlled = useRef(!!onChange)
  const isMounted = useRef(false)

  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  
  const increaseBy = (value: number) => {

    if(isControlled.current) {
      return onChange!({ count: value, product })
    }
    
    const newValue = Math.max(counter + value, 0)
    if(initialValues?.maxCount && newValue > initialValues.maxCount) {
      return
    }
    setCounter(newValue)
    
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true
      return
    }
    setCounter(value)
  }, [value])
  
  console.log(initialValues?.count, value)

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount : initialValues?.maxCount,
    increaseBy,
    reset,
  }
}
