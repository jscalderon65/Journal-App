import { types } from "./Types/Types.js";
const initial={name:"chi"}
export const authReducer = (state = initial, action) => {
  console.log(state,action); 
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
