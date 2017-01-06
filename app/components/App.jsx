import React, { Component } from 'react'
import Search from './Search'
import VideoList from './VideoList'
import {GetSearchResults} from '../utils/helpers'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideos: []
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.addOrRemoveVideo = this.addOrRemoveVideo.bind(this)
  }

  componentDidMount () {
    
  }

  handleSearch (e) {
    e.preventDefault()
    let searchInput = document.querySelector('#search-input')
    let searchTerm = document.querySelector('#search-input').value
    GetSearchResults(searchTerm).then(data => {
      this.setState({
        videos: data.data.items
      })
    })
    // searchInput.value = ''
    console.log(this.state)
  }


  handleItemClick (video) {
    if(typeof video === 'string' ) {
      return this.addOrRemoveVideo(video)
    }
    console.log(video)
    let videoId = video.id.videoId
    let videoTitle = video.snippet.title
    let videoPoster = video.snippet.thumbnails.medium.url
    // add video clicked to array of selected videos, 3 max
    // otherwise, if it's in seleted videos, remove it
    // NOW prevent it from being added twice
    
    this.addOrRemoveVideo(videoTitle)
    
  }

  addOrRemoveVideo (videoTitle) {
    if(this.state.selectedVideos.length < 3 && this.state.selectedVideos.indexOf(videoTitle) === -1) {
      this.setState({ selectedVideos: this.state.selectedVideos.concat(videoTitle) })
    } else {
      this.setState({
        selectedVideos: this.state.selectedVideos.filter((selectedVideo) => selectedVideo !== videoTitle)
      })
    }
  }

  
  render(){
    return (
      <div className="container">
        <h1>Break Beats</h1>
        <Search handleSearch={this.handleSearch} />
        <VideoList videos={this.state.videos} onItemClick={this.handleItemClick} selectedVideos={this.state.selectedVideos} />
        {/* this.props.children */}
      </div>
    )
  }
}
