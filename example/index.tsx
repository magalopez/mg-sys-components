import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const App = () => {

  const product = {
    id: '1',
    title: 'Best Programmer',
    // img: './best-programmer-mug.webp'
  }

  return (
    <>
      <ProductCard
        key={product.id} 
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
