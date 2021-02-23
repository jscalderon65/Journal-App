import { types } from "./Types/Types.js";
export const authReducer = (state = {}, action) => {
  /* console.log(action);  */
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
    };
    case types.logout:
        return {};
    default:
      return state;
  }
};
