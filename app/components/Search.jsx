import React from 'react'

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearchInput (e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearch (e) {
    e.preventDefault()
    this.props.handleSearch(this.state.searchInput)
    this.setState({
      searchInput: ''
    })
  }

  render () {
    return (
      <form className="form Search" onSubmit={this.handleSearch}>
        <div className="form-element">
          <label htmlFor='search-input'>Search Youtube</label>
          <input onChange={this.handleSearchInput} value={this.state.searchInput} type='text' placeholder='Search Youtube' className='form-input' />
          <button type="submit" className="button">Search</button>
        </div>
      </form>
    )
  }
}

export default Search
