import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from '../components/SearchBar/SearchBar';

import { DataProduct } from "../entities/Dashboard/dashboard.entity";

import './dashboard.css'

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData()

    return () => {
      // desmontaje
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('api/admin/api/2023-04/products.json', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'X-Shopify-Access-Token': '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'
        }
      })
      const data = await response.json();
      console.log('data', data);
      setProducts(data.products);
    } catch (error) {
      console.error('FETCH DATA ERROR', error);
      throw error;
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const filterProducts = (product: DataProduct) => (
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.id.toString().includes(search) ||
    search.length === 0
  )

  return (
    <>
      <div className="Dashboard__page">
        <header className="Dashboard__page--header">
          <h1>Dashboard</h1>
        </header>
        <main className="Dashboard__page--main">
          <SearchBar
            value={search}
            onChange={handleChange}
            setValue={setSearch}
          />
          <div>
            {
              products.filter(filterProducts).length === 0 ?
                (<p>No se encontraron coincidencias</p>) :
              <section>
                <div className="TableHeader_container">
                  <div className="TableHeader_id">ID</div>
                  <div className="TableHeader_sku">SKU</div>
                  <div className="TableHeader_price">PRICE</div>
                  <div className="TableHeader_title">TITLE</div>
                  <div className="TableHeader_type">STOCK</div>
                </div>
                <section>
                  {products.filter(filterProducts).map((product: DataProduct) => {
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        sku={product.variants[0].sku}
                        price={product.variants[0].price}
                        inventoryQuantity={product.variants[0].inventory_quantity}
                        vendor={product.vendor}
                      />
                    )
                  })}
                </section>
              </section>
            }
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard;