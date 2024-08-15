import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';

describe('ProductImage', () => {
  test('should show Image', () => {
    const component = renderer.create(
      <ProductImage img="https://image.jpg" />
    )
    
    console.log(component.toJSON())

    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should show product object img ', () => {
    const product = {
      id: '1',
      title: 'Product Hellow',
      img: 'https://image-hellow.jpg'
    }

    const component = renderer.create(
      <ProductCard product={product}>
        {() => <ProductCard.Image/>}
      </ProductCard>
    )

    console.log(component.toJSON())
    expect(component.toJSON()).toMatchSnapshot()
  })
})