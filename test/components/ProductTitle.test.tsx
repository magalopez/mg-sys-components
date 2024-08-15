import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';

describe('ProductTitle', () => {
  test('should show custom title', () => {
    const component = renderer.create(
      <ProductTitle title="Custom title" className='hello-world'/>
    )
    
    console.log(component.toJSON())

    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should show product object title ', () => {
    const product = {
      id: '1',
      title: 'Product title - Hellow'
    }

    const component = renderer.create(
      <ProductCard product={product}>
        {() => <ProductCard.Title />}
      </ProductCard>
    )

    console.log(component.toJSON())
    expect(component.toJSON()).toMatchSnapshot()
  })
})