import React from 'react';
import {connect} from 'react-redux';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => (
  <div className="content-container">
    <div className="list-body">
      {
        props.notes.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Notes</span>
          </div>
        ) : (
            props.notes.map((note) => {
              return <NoteListItem key={note.id} {...note} />;
            })
          )
      }
    </div>
  </div>
  );

const mapStateToProps = (state)=>{
    return{
      notes: state.notes
    };
}

export default connect(mapStateToProps)(NoteList);

