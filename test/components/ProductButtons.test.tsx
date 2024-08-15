import React from 'react'
import renderer from 'react-test-renderer'
import { ProductButtons, ProductCard } from '../../src/components';

describe('ProductButtons', () => {
  test('should show Buttons', () => {
    const component = renderer.create(
      <ProductButtons className='custom-buttons' />
    )
    
    console.log(component.toJSON())

    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should show product buttons ', () => {
    const product = {
      id: '1',
      title: 'Product Hellow',
      img: 'https://image-hellow.jpg'
    }

    const component = renderer.create(
      <ProductCard product={product}>
        {() => <ProductCard.Buttons />}
      </ProductCard>
    )

    console.log(component.toJSON())
    expect(component.toJSON()).toMatchSnapshot()
  })
})