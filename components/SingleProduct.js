export const SingleProduct = ({
  target,
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
  const { rate, count } = rating
  const productContainer = document.createElement('div')
  productContainer.className = 'product-container container'

  const renderRating = (count) => {
    let ratingContainer = ''
    for (let i = 0; i < parseInt(count); i++) {
      ratingContainer += '<i class="star"></i>'
    }

    return ratingContainer
  }

  productContainer.innerHTML = `
    <div class="product-image">
      <img src="${image}" alt="${title}" />
    </div>
    <div class="product-info">
      <div class="title">
        <h1>${title}</h1>
        <p class="category">${category}</p>
      </div>
      <div class="rating">
        ${renderRating(rate)}
        <div className="count">(${count})</div>
      </div>
      <p>$${price}</p>
      <div class="description">${description}</div>
    </div>
  `
  target.appendChild(productContainer)
}