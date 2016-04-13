import React from 'react'

const Other = (props) => {
  const { url } = props
  return (
    <div className="jumbotron">
      <h1>Other page!</h1>
      <p>Welcome to another page</p>
      <p><var>path</var>: <kbd>{url}</kbd></p>
      <button className="btn btn-primary" type="button" data-toggle="collapse"
        data-target="#collapse" aria-expanded="false"
        aria-controls="collapse"
      >
        Button with data-target
      </button>
      <div className="collapse" id="collapse">
        <div className="well">
          Hello!
        </div>
      </div>
    </div>
  )
}

Other.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default Other
