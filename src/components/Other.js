import React from 'react'

const Other = (props) => {
  const { url } = props
  return (
    <div className="jumbotron">
      <h1>Other page!</h1>
      <p>Welcome to another page</p>
      <p><var>path</var>: <kbd>{url}</kbd></p>
    </div>
  )
}

Other.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default Other
