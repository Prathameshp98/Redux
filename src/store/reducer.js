import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const Reducer = (state = initialState, action) => {
    // if(action.type === 'INCREMENT'){
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type === 'ADD'){
    //     return {
    //         counter: state.counter + action.val
    //     }
    // }
    // if(action.type === 'DECREMENT'){
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if(action.type === 'SUBTRACT'){
    //     return {
    //         counter: state.counter - action.val
    //     }
    // }

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.elementId)
            return {
                ...state,
                results: updatedResults
            }
    }
    return state;
}

export default Reducer