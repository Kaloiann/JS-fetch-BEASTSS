export async function getCategories()  {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const data = await res.json()
  
  return data
}