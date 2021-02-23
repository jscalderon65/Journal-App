import { types } from "./Types/Types.js";
const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesAddNew:
      return{...state,
      notes:state.notes.concat(action.payload)}
    case types.notesLogoutCleaning:
      return{
        notes:[],
        active:null
      }
    case types.notesDelete:
      return{
        ...state,
        active:null,
        notes:state.notes.filter(note=>note.id!==action.payload)
      }
    case types.notesActiveToNull:
      return {
        ...state,
        active: null,
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.find((item) => item.id === action.payload.note.id)
          ? state.notes.map((note) =>
              note.id === action.payload.id ? action.payload.note : note
            )
          : [...state.notes, action.payload.note],
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
