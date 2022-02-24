import { useState } from 'react'
import { useHistory } from 'react-router-dom'

//styles
import './searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        // ?q=pie
        history.push(`/search?q=${term}`)
    }


  return (
    <div className="searchbar">
        <form onSubmit={ handleSubmit }>
            <label htmlFor="search">Search:</label>
            <input
                type="text"
                id="search"
                onChange={(e) => {
                    setTerm(e.target.value)
                }}
                required
            />
        </form>
    </div>
  )
}
