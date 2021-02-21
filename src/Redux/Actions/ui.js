import { types } from "../Types/Types";

const startLoading=()=>({
    type:types.uiStartLoading
})
const finishLoading=()=>({
    type:types.uiFinishLoading
})

export {startLoading,finishLoading}