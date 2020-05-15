import React from 'react'
import { connect } from 'react-redux'

const Smurf = ({ smurf }) => {
     return (
          <div>
               <h2>{smurf.name}</h2>
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height}</p>
          </div>
     )
}

export default connect(
     null,
     {}
)(Smurf)