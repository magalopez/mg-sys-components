# mg-sys-components

`mg-sys-components` is a React component library designed to provide flexible and reusable UI components for e-commerce applications.

## Installation

To install `mg-sys-components`, run the following command in your project directory:

```bash
npm install mg-sys-components
```

or if you're using yarn:

```bash
yarn add mg-sys-components
```

## Usage

Here's an example of how to use the `ProductCard` component from `mg-sys-components`:

```jsx
import { ProductCard } from 'mg-sys-components'

function MyComponent() {
  const product = {
    // Your product data here
  }

  return (
    <ProductCard
      product={product} 
      initialValues={{
        count: 4, 
        maxCount: 8
      }}
    >
      {() => (
        <>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </>
      )}
    </ProductCard>
  )
}
```

## Components

### ProductCard

The `ProductCard` component is a compound component that allows for flexible rendering of product information.

#### Props

- `product`: Object containing the product information.
- `initialValues`: Object containing initial values for the card.
  - `count`: Initial count of the product.
  - `maxCount`: Maximum allowed count for the product.

#### Sub-components

- `ProductCard.Image`: Renders the product image.
- `ProductCard.Title`: Renders the product title.
- `ProductCard.Buttons`: Renders action buttons for the product.

## Contributing

We welcome contributions to `mg-sys-components`! Please read our contributing guidelines before submitting pull requests.

## License

`mg-sys-components` is MIT licensed.