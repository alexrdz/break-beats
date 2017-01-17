import React from 'react'

const Main = (props) => {
  return (
    <div className="container">
      <h1>Break Beats (Main)</h1>
      {props.children}
    </div>
  )
}

export default Main
