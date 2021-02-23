import { types } from "./Types/Types.js";
const initialState ={
    loading:false
}
export const uiReducer = (state = initialState, action) => {
  /* console.log(action);  */
  switch (action.type) {
    case types.uiStartLoading:
      return {
        loading:true
    };
    case types.uiFinishLoading:
    return {
            loading:false
        };
    default:
      return state;
  }
};
