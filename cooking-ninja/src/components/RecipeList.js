import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useState, useRef } from 'react'

//styles
import './recipeList.css'

export default function RecipeList( {recipes} ) {
  const { mode, color, changeColor } = useTheme()

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
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
                className="button hoverColor"
                >Cook This
              </Link>
          </div>
      ))}
    </div>
  )
}
