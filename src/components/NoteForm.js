import React from 'react';

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            title : props.note ? props.note.title : '',
            theNote : props.note ? props.note.theNote : '',
            error : ''
        }
    }


    onTitleChange = (e) =>{
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onNoteChange = (e) =>{
        const theNote = e.target.value;
        this.setState(() => ({ theNote }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.theNote){
            this.setState(()=>({error:'Please provide title and note'}));
        }
        else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                title: this.state.title,
                theNote: this.state.theNote
            });
        }

        //this.props.handleClearSelected();
    };


    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    placeholder="Take some notes... "
                    className="textarea"
                    value={this.state.theNote}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <button className="button">Close</button>
            </form>    
        )
    }

}