import React from 'react';
import {connect} from 'react-redux';
import CreateButton from '../components/CreateButton';
import NoteModal from '../components/NoteModal';
import NoteList from '../components/NoteList';
import {setAppId} from '../actions/appAct';

export class DashboardPage extends React.Component {
    state = {
        modalCreate: false
    };

    handleCreate = () => {
        this.setState(() => ({
            modalCreate: true
        })); 
    };

    handleClearSelected = () => {
        this.setState( () => ({ modalCreate : false }));
        this.props.setAppId(0);

    };

    

    render() {
        return (
        <div>
        <CreateButton handleCreate={this.handleCreate}/>
        <NoteModal 
            modalCreate={this.state.modalCreate}
            modalIDEdit= {this.props.appState.id}
            handleClearSelected={this.handleClearSelected}
            onSubmit={this.onSubmit}
        />   
        <NoteList/>
        
        </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    setAppId: (id) => dispatch(setAppId(id))
});


const mapStateToProps = (state)=>{
    return{
      appState: state.appState
    };
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
  