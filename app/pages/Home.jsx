import React from 'react'
import Breaks from '../components/Breaks'
import Search from '../components/Search'

class Home extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div>
        <h1>Break Beats App Home</h1>
        <Search />
      </div>
    )
  }
}

export default Home
