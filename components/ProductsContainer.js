export const ProductsContainer = ({
  target,
  className
}) => {
  const productsContainer = document.createElement('div')
  
  if(className) productsContainer.className = className
  if(target) target.appendChild(productsContainer)
  return productsContainer
}