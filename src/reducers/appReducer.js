//App state
const appReducerDefState = {id: 0}

const appReducer = (state= appReducerDefState, action) => {
    switch(action.type){
        case 'SET_APPID':
            return {id: action.id};
        default:
            return state;
    }
}

export default appReducer;