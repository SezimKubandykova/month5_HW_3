import {types} from "./types";

export const addNumberAction = (number) => {
    return {
        type: types.ADD_NUMBER,
        payload: number
    }
}
export const clearNumberAction = () => {
    return {
        type: types.CLEAR_NUMBER
    }
}