//import actions
import {
     FETCH_SMURF_DATA_START,
     FETCH_SMURF_DATA_SUCCESS,
     FETCH_SMURF_DATA_FAILURE,
     POST_SMURF,
     DELETE_SMURF,
     DELETE_SMURF_START
} from '../store/actions'


//initialState
const initialState = {
     isFetching: false,
     deleting: false,
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
          case DELETE_SMURF:
               return{
                    ...state,
                    smurfs: [...state.smurfs.filter(smurf => smurf.id !== action.payload)],
                    isFetching: false,
                    deleting: false,
               }
          case DELETE_SMURF_START:
               return {
                    ...state,
                    deleting: true,
                    isFetching: false,
               }
          case FETCH_SMURF_DATA_START:
               return {
                    ...state,
                    isFetching: true,
                    deleting: false,
               }
          case FETCH_SMURF_DATA_SUCCESS:
               return {
                    ...state,
                    isFetching: false,
                    deleting: false,
                    smurfs: action.payload,
               }
          case POST_SMURF:
               return{
                    ...state,
                    deleting: false,
                    isFetching: false,
                    smurfs: action.payload
               }

          default:
               return state
     }
}