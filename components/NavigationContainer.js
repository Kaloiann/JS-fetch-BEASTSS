export const CategoriesContainer = ({
    target,
    className
  }) => {
    const categoriesContainer = document.createElement('div')
    
    if(className) categoriesContainer.className = className
    if(target) target.appendChild(categoriesContainer)
    return categoriesContainer
  }