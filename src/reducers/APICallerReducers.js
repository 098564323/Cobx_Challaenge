import {SUCCESS,FAILURE,WAITING} from '../utils/Constant';

const initialState = {
    response: [],
    isFetching: true,
    error: false
}

export default(state = initialState,action)=>{
  switch(action.type) {
    case WAITING:
        console.log("Reducers WAITING");
         return {
             ...state,
             isFetching: true
         }
     case SUCCESS:
          console.log("Reducers SUCCESS");
          return {
              ...state,
              isFetching: false,
              response: action.data
          }
    case FAILURE:
         console.log("Reducers FAILURE");
      return {
          ...state,
          isFetching: false,
          error: true
      }
    default:
      return state
  }
}
