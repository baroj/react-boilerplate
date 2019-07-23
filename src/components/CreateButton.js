import React from 'react'

const CreateButton = (props) =>(
        <div className="content-container"> 
            <button className="big-button" onClick= 
                {props.handleCreate}> 
                Make a Note...
            </button> 
        </div>
); 


export default CreateButton;
