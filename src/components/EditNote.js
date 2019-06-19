import React from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import {startEditNote, startRemoveNote} from '../actions/notes';

export class EditNotePage extends React.Component {
    onSubmit = (note) => {
        this.props.startEditNote( this.props.note.id , note);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveNote({ id: this.props.note.id });
        this.props.history.push('/');
    }

    render(){
        return (
        <div>
            <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Note</h1>
            </div>
            </div>
            <div className="content-container">
                <NoteForm
                    note={this.props.note}
                    onSubmit={this.onSubmit}
                />
                <button className="button button--secondary" onClick={this.onRemove}>Remove Note</button>
            </div>
        </div>
        )
    }

}
const mapDispatchToProps = (dispatch, props) =>({
    startEditNote: (id, note) => dispatch(startEditNote( id , note)),
    startRemoveNote : (data)=>dispatch(startRemoveNote(data))
});

const mapStateToProps = (state, props) => {
       return {
           note: state.notes.find((note)=> note.id === props.match.params.id)
       };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);