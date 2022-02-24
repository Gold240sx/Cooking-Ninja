import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

import './recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()
  // FOR JSON SERVER // const url = 'http://localhost:3000/recipes/' + id
  // FOR JSON SERVER // const { error, isPending, data:recipe } = useFetch(url)
  // FOR JSON SERVER // const [data, setData] = useState(null)
  // Below is for Firebase
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {	
      if (doc.exists) {	
        setIsPending(false)	
        setRecipe(doc.data())	
      } else {	
        setIsPending(false)	
        setError(`Could not find that recipe`)	
      }
    })
    
    return () => unsub()

  }, [id])

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Strawberry Bannana Smoothie'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <h3 className="subtitle">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  )
}
