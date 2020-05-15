import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteSmurf, fetchSmurfData } from '../store/actions'

const Smurf = ({ smurf, deleteSmurf, fetchSmurfData }) => {

     useEffect(() => {
          fetchSmurfData()
     }, [fetchSmurfData])

     return (
          <div>
               <h2>{smurf.name}</h2>
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height}</p>
               <button onClick={() => {
                    deleteSmurf(smurf.id)
                    console.log(smurf)
                    setTimeout( () => {
                    fetchSmurfData()
                    }, 110)
                    }}>Delete Smurf</button>
          </div>
     )
}

// const mapStateToProps = state => {
//      return {
//           smurf: state.smurf
//      }
// }

export default connect(
     null,
     {deleteSmurf, fetchSmurfData }
)(Smurf)