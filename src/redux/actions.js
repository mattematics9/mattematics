export const switchPage = (nextPage) => {
    return (dispatch, getState) => {
        let state = getState();
        let previousPage = state.page === ''? 'home': state.page;
        document.getElementById(`${previousPage}-link`).className = '';
        document.getElementById(`mobile-${previousPage}-link`).className = '';
        dispatch({type: 'SWITCH_PAGE', payload: {page: nextPage}})
    }
}