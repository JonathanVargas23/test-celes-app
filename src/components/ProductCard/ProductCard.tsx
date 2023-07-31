import { DataProductCard } from '../../entities/ProductCard/productCard.entity'

import './ProductCard.css'

const ProductCard = ( product: DataProductCard ) => {
  
  return (
    <div key={product.id} className="ProductCard_container">
      <p className="ProductCard_id">{product.id}</p>
      <p className="ProductCard_sku">{product.sku}</p>
      <p className="ProductCard_price">${product.price}</p>
      <p className="ProductCard_title">{product.title}</p>
      <p className="ProductCard_type">{product.inventoryQuantity}</p>
    </div>
  )
}

export default ProductCard