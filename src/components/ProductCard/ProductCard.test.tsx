import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import { DataProductCard } from '../../entities/ProductCard/productCard.entity'
import "@testing-library/jest-dom"

describe('<ProductCard />', () => {
  const ProductDummy: DataProductCard = {
    id: 1,
    sku: 'TOY1',
    price: '99,99',
    title: 'Product dummy',
    inventoryQuantity: 10,
    vendor: 'TOYS'
  }

  beforeEach(() => {
    render(<ProductCard
      id={ProductDummy.id}
      title={ProductDummy.title}
      sku={ProductDummy.sku}
      price={ProductDummy.price}
      inventoryQuantity={ProductDummy.inventoryQuantity}
      vendor={ProductDummy.vendor}
    />)
  })

  test('should render data ok', () => {
    expect(screen.getByTestId('ProductCard_id')).toHaveTextContent(ProductDummy.id.toString());
    expect(screen.getByTestId('ProductCard_title')).toHaveTextContent(ProductDummy.title.toString());
    expect(screen.getByTestId('ProductCard_sku')).toHaveTextContent(ProductDummy.sku.toString());
    expect(screen.getByTestId('ProductCard_price')).toHaveTextContent(ProductDummy.price.toString());
    expect(screen.getByTestId('ProductCard_inventoryQuantity')).toHaveTextContent(ProductDummy.inventoryQuantity.toString());
  })
})