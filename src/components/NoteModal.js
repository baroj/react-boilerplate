import React from 'react';
import Modal from 'react-modal';
import NoteForm from './NoteForm';

export default class NoteModal extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <Modal
            isOpen={!!this.props.selectedOption}
            onRequestClose={this.props.handleClearSelected}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
           
        >
            <h3 className="modal__title">Selected Option</h3>
            <NoteForm handleClearSelected={this.props.handleClearSelected} onSubmit={this.props.onSubmit}/>
        </Modal>)


    }

};




