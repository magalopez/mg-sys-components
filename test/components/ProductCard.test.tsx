import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components'; // Asegúrate de importar tu componente

const { act } = renderer;
describe('ProductCard', () => {
  test('should show ProductCard', () => {
    const product = {
      id: '1',
      title: 'ProductCard Hellow',
      img: 'https://product-card-image-hellow.jpg'
    };

    const component = renderer.create(
      <ProductCard product={product}>
        {() => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    );

    console.log(component.toJSON());
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should increase product quantity', () => {
    const product = {
      id: '1',
      title: 'ProductCard increase',
      img: 'https://product-card-image-hellow.jpg'
    };

    const component = renderer.create(
      <ProductCard product={product}>
        {({ count, increaseBy }) => (
          <>
            <h1>Increase</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(2)}>Increase</button>
          </>
        )}
      </ProductCard>
    );

    let tree = component.toJSON();
    
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = component.toJSON(); // Actualiza el árbol después del clic

    console.log('Counter: ', (tree as any).children[1].children);
    expect((tree as any).children[1].children[0]).toBe('2');
  });
});