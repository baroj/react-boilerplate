
//Notes Reducer
const notesReducerDefState = []

const notesReducer = (state= notesReducerDefState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return [...state,action.note];  
        case 'SET_NOTES':
            return action.notes;      
        default:
            return state;
    }
};

export default notesReducer;