import { getSingleProduct } from "../api/products.js"
import { SingleProduct } from "../components/SingleProduct.js"


(async function Product() {
  const app = document.getElementById("app")
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');  
  const product = await getSingleProduct(id)

  SingleProduct({
    target: app,
    data: product
  })
})()