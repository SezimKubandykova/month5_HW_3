import {types} from "../types";

const initialState = {
    sum: []
}

export const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NUMBER:
            return {...state, sum: [...state.sum, +state.sum + action.payload]}
        case types.CLEAR_NUMBER:
            return {...state, sum: []}
        default: return state
    }
}