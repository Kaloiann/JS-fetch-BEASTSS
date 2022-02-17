import { getProductsFromCategory, getAllProducts } from "../api/products.js"
import { ProductItem } from "../components/ProductItem.js"
import { ProductsContainer } from "../components/ProductsContainer.js"

(async function Browse() {
  const app = document.getElementById("app")
  const productsContainer = ProductsContainer({
    target: app,
    className: 'products-container container'
  })

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('category');

  let products;
  
  if(category) {
    products = await getProductsFromCategory(category)
  } else {
    products = await getAllProducts()
  }

  products.forEach(product => {
    ProductItem({
      target: productsContainer,
      className: 'product-item',
      data: product
    })
  })
})()