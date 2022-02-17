import { getCategories } from "../../api/categories.js"
import { Navigation } from "../../components/Navigation.js"
import { CategoriesContainer } from "../../components/NavigationContainer.js"

(async function Header() {
  const app = document.getElementById("app")

  const categoriesContainer = CategoriesContainer({
    target: app,
    className: 'categories-container container'
  })

  const categories = await getCategories()

  Navigation({
    target: categoriesContainer,
    className: 'category',
    title: false
  })

  categories.forEach(category => {
    Navigation({
      target: categoriesContainer,
      className: 'category',
      title: category
    })
  })
})()