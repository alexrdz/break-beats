import React from 'react'

class SaveForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      titleInput: ''
    }

    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleTitleInput (e) {
    this.setState({
      titleInput: e.target.value
    })
  }

  handleSave (e) {
    e.preventDefault()
    this.props.savePlaylist(this.state.titleInput, this.props.videos)
  }

  render () {
    return (
      <form className="form Save" onSubmit={this.handleSave}>
        <div className="form-element">
          <label htmlFor='playlist-title-input'>Name Your Playlist</label>
          <input onChange={this.handleTitleInput} value={this.state.titleInput} type='text' placeholder='Name your playlist' className='form-input' />
          <button type="submit" className="button">Search</button>
        </div>
      </form>
    )
  }
}

export default SaveForm
