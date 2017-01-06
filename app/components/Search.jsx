import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <form className="form Search" onSubmit={handleSearch}>
      <div className="form-element">
        <label htmlFor='search-input'>Search Youtube</label>
        <input type='text' id='search-input' placeholder='Search Youtube' className='form-input' />
        <button type="submit" className="button">Search</button>
      </div>
    </form>
  )
}

export default Search
