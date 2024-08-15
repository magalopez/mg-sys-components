import { Props as ProductButtonsProps } from '../components/ProductCard/ProductButtons'
import { Props as ProductCardProps } from '../components/ProductCard/ProductCard';
import { Props as ProductImageProps } from '../components/ProductCard/ProductImage'
import { Props as ProductTitleProps } from '../components/ProductCard/ProductTitle'

export interface Product {
  id    : string;
  img?  : string;
  title : string;
}

export interface ProductContextProps {
  counter    : number;
  maxCount?  : number;
  product    : Product;
  increaseBy : (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product, className } : ProductCardProps) : JSX.Element,
  Buttons : (Props : ProductButtonsProps) => JSX.Element;
  Image   : (Props : ProductImageProps) => JSX.Element;
  Title   : (Props : ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
  count   : number;
  product : Product;
}

export interface ProductInCart extends Product {
  count : number
}

export interface ShoppingCartProps {
  [key: string] : ProductInCart
}

export interface InitialValuesProps {
  count?    : number;
  maxCount? : number;
}

export interface ProductCardHandlersArgs {
  count             : number;
  isMaxCountReached : boolean;
  maxCount?         : number;
  product           : Product;

  handleDecrement?  : () => void;
  handleIncrement?  : () => void;
  increaseBy        : (value: number) => void;
  reset             : () => void;
}