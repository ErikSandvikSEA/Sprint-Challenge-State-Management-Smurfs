//import actions
import {
     FETCH_SMURF_DATA_START,
     FETCH_SMURF_DATA_SUCCESS,
     FETCH_SMURF_DATA_FAILURE,
     POST_SMURF
} from '../store/actions'


//initialState
const initialState = {
     isFetching: false,
     smurfs: [
          {
               name: '',
               age: '',
               height: '',
               id: '',
          }
     ]
}

export const reducer = (state = initialState, action) => {
     switch(action.type) {
          case FETCH_SMURF_DATA_START:
               return {
                    ...state,
                    isFetching: true,
               }
          case FETCH_SMURF_DATA_SUCCESS:
               return {
                    ...state,
                    isFetching: false,
                    smurfs: action.payload,
               }
          case POST_SMURF:
               return{
                    ...state,
                    smurfs: action.payload
               }
          default:
               return state
     }
}