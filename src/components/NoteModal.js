import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import {startAddNote,startEditNote, startRemoveNote} from '../actions/notes';

export class NoteModal extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (note) => {
        if(this.props.modalIDEdit)
            this.props.startEditNote(this.props.modalIDEdit, note);
        else
            this.props.startAddNote(note);

        this.props.handleClearSelected();
      };

    onRemove = () => {
        this.props.startRemoveNote({ id: this.props.note.id });
        this.props.handleClearSelected();
    }

    render() {

        return (
        <Modal
            isOpen={!!this.props.modalCreate || !!this.props.modalIDEdit}
            onRequestClose={this.props.handleClearSelected}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
           
        >
        <div className="content-container">
            <h3 className="modal__title"></h3>
            <NoteForm 
                note={this.props.note}
                handleClearSelected={this.props.handleClearSelected}
                onSubmit={this.onSubmit} 
            />
           {this.props.modalIDEdit ? (<button className="button button--secondary" onClick={this.onRemove}>Remove Note</button>):(null)}
        </div>
        </Modal>)
    }

};


const mapDispatchToProps = (dispatch, props) =>({
    startAddNote: (note) => dispatch(startAddNote(note)),
    startEditNote: (id, note) => dispatch(startEditNote( id , note)),
    startRemoveNote : (data)=>dispatch(startRemoveNote(data))
});

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note)=> note.id === props.modalIDEdit)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);






