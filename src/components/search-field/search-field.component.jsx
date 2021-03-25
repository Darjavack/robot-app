import React from 'react'
import "./search-field.styles.css"

export const SearchField = ({placeholder, handleChange}) => (
    <div>
        <input 
          className="search"
          placeholder={placeholder} 
          type="search" 
          onChange={handleChange}>
        </input>  
    </div>
)