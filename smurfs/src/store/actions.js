import axios from 'axios'

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE'



const smurfUrl = `http://localhost:3333/smurfs`

export const fetchSmurfData = () => {
     return dispatch => {
          dispatch({type: FETCH_SMURF_DATA_START})
          axios
               .get(smurfUrl)
               .then(res => {
                    console.log(res.data)
                    dispatch({type: FETCH_SMURF_DATA_SUCCESS, payload: res.data})
               })
               .catch(err => {
                    console.log(err)
                    // dispatch({type: FETCH_SMURF_DATA_FAILURE})
               })
     }
}