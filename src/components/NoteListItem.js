import React from 'react';
import {connect} from 'react-redux';
import {setAppId} from '../actions/appAct';

export class NoteListItem extends React.Component {
  handleClick = () => {
    this.props.setAppId(this.props.id);
  }
  
  render () {
  return (
    <div className="list-item" onClick={this.handleClick}>
      <div>
        <h3 className="list-item__title">{this.props.title}</h3>
        <h3 className="list-item__sub-title">{this.props.theNote}</h3>
      </div>
    </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  setAppId: (id) => dispatch(setAppId(id))
});

export default connect(undefined, mapDispatchToProps) (NoteListItem);