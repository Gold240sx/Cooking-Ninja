import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
// import { useEffect, useState } from 'react'
import Trashcan from '../assets/close.svg'
import { projectFirestore } from '../firebase/config'

//styles
import './recipeList.css'

export default function RecipeList( {recipes} ) {
  const { mode, color} = useTheme()
  // const [hover, setHover] = useState(false)
  // const HoverColorItems = window.document.querySelectorAll('.hoverColor')

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  // useEffect((color) => {
  //   HoverColorItems.forEach(item => {
  //     if (item.classList.contains('.active')) {
  //       item.style.background= { color }};
  //       item.innerText = "sausages";
  //       console.log('hey')
  //     }
  //   ,[hover, setHover])

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
          <div key={recipe.id} className={`card ${mode}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.cookingTime} to make.</p>
              <div>{recipe.method.substring(0, 100)}...</div>
              <Link 
                to={`/recipes/${recipe.id}`} 
                // className={`button hoverColor ${hover ? "active" : ""}`}
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
                //style={`${active ? "background": "red" : }`}
                >Cook This
              </Link>
              <img  
                src={ Trashcan }
                className={`delete ${mode === "dark" ? "" : "delete-darker"}`}
                onClick={() => handleClick(recipe.id)}
              />
          </div>
      ))}
    </div>
  )
}
