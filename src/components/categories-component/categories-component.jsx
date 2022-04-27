import CategoryItem from "../category-item/category-item"

import "./categories-component.styles.scss"

const CategoriesComponent = ({ categories }) => {

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem category={category} key={category.id}/>
        );
      })}
    </div>
  )
}

export default CategoriesComponent