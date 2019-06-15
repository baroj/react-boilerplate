import React from 'react';
import {connect} from 'react-redux';
import CreateButton from '../components/CreateButton';
import NoteModal from '../components/NoteModal';
import NoteList from '../components/NoteList';
import {startAddNote} from '../actions/notes';

export class DashboardPage extends React.Component {
    state = {
        notes:[],
        selectedOption: undefined
    };

    handleCreate = () => {
        
        this.setState(() => ({
            selectedOption: 1
        })); 
    };

    handleClearSelected = () => {
        this.setState( () => ({ selectedOption : undefined }));
    };

    onSubmit = (note) => {
        console.log(note);
        this.props.startAddNote(note);
        this.props.history.push('/');
      };

    render() {
        return (
        <div>
        <CreateButton handleCreate={this.handleCreate}/>
        <NoteModal 
            selectedOption={this.state.selectedOption}
            handleClearSelected={this.handleClearSelected}
            onSubmit={this.onSubmit}
        />
        <NoteList/>
        
        </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddNote: (note) => dispatch(startAddNote(note))
  });
  
  export default connect(undefined, mapDispatchToProps)(DashboardPage);
  