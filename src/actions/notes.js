import database from '../firebase/firebase';

// ADD_NOTE
export const addNote = (note) => ({
    type: 'ADD_NOTE',
    note
});


export const startAddNote = (noteData = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
        title = '',
        theNote = ''
      } = noteData;

      const note = { title, theNote};
      console.log('adding note');
      return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
        dispatch(addNote({
          id: ref.key,
          ...note
        }));
      });
    };
  };


// SET_NOTES
export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});


export const startSetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes`)
    .once('value')
    .then((snapshot) => {
        const notes = [];
        
        snapshot.forEach((childSnapshot)=> {
            notes.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })

        dispatch(setNotes(notes));
        
    });
  };
};
 