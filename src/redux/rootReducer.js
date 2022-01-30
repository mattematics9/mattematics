const initState = {
    page: window.location.search
}

const rootReducer = (state = initState, action) => {
    switch (action.type){
        case 'SWITCH_PAGE':
            return{
                ...state,
                page: action.payload.page
            }
        default:
            return state;
    }
}

export default rootReducer