import { getAllProducts } from "../api/products.js"
import { ProductItem } from "../components/ProductItem.js"
import { ProductsContainer } from "../components/ProductsContainer.js"

(async function Home() {
  const app = document.getElementById("app")
  const productsContainer = ProductsContainer({
    target: app,
    className: 'products-container container'
  })
  
  const products = await getAllProducts()

  products.forEach(product => {
    ProductItem({
      target: productsContainer,
      className: 'product-item',
      data: product
    })
  })
})()