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
      <form className="Search-form" onSubmit={this.handleSearch}>
        <div className="Grid">
          <div className="Cell ten add-padding--small">
            {/*<label htmlFor='search-input'>Search Youtube</label>*/}
            <input onChange={this.handleSearchInput} value={this.state.searchInput} type='text' placeholder='Search Youtube' className='Search-form__input' />
          </div>
          <div className="Cell two">
            <button type="submit" className="button-primary">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search
