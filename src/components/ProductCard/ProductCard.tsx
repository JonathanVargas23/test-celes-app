import { DataProductCard } from '../../entities/ProductCard/productCard.entity'

import './ProductCard.css'

const ProductCard = ( product: DataProductCard ) => {
  
  return (
    <div key={product.id} className="ProductCard_container">
      <p data-testid="ProductCard_id" className="ProductCard_id">{product.id}</p>
      <p data-testid="ProductCard_sku" className="ProductCard_sku">{product.sku}</p>
      <p data-testid="ProductCard_price" className="ProductCard_price">${product.price}</p>
      <p data-testid="ProductCard_title" className="ProductCard_title">{product.title}</p>
      <p data-testid="ProductCard_inventoryQuantity" className="ProductCard_type">{product.inventoryQuantity}</p>
    </div>
  )
}

export default ProductCard