import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/filterAction"

const initialState = {
    filters: {
        category: [],
        stock: false,
    },
    keywords: '',
}

export const filterReducer = (state = initialState, action) => {
   switch (action.type) {
        case TOGGLE_CATEGORY:
            if(!state.filters.category.includes(action.payload)){
            return {
        ...state,
        filters:{
        ...state.filters,
        category: [...state.filters.category, action.payload]
        }
    }
    }else {
        return {
            ...state,
        filters: {
            ...state.filters,
            category: state.filters.category.filter((c) => c !== action.payload)
        }
        }
     }
     case TOGGLE_STOCK:
        return {
            ...state,
            filters: {
                ...state.filters,
                stock: !state.filters.stock
            }
        }
   
    default:
        return state;
   }
}