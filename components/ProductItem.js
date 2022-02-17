export const ProductItem = ({
  target,
  className,
  data: {
    category,
    description,
    id,
    image,
    price,
    title,
    rating
  }
}) => {
  const productItem = document.createElement('a')
  productItem.href =  `product.html?id=${id}`
  productItem.className = className
  productItem.id = `product_${id}`
  productItem.dataset.category = category
  const { rate, count } = rating

  productItem.innerHTML = `
    <div class="category">${category}</div>
    <div class="img">
      <img src="${image}" alt="${title}" />
    </div>
    <div class="bottom">
      <h2>${title}</h2>
      <p>$${price}</p>
    </div>
  `
  target.appendChild(productItem)
  return productItem
}