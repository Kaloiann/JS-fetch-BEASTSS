export async function getAllProducts()  {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  
  return data
}

export async function getProductsFromCategory(category)  {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const data = await res.json()
  
  return data
}

export async function getSingleProduct(id)  {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json()
  
  return data
}