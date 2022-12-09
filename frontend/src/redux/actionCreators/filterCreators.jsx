import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/filterAction"

export const toggleCategory = (category) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: category,
    }
}

export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK,
    }
}