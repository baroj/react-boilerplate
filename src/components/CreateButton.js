import React from 'react'

const CreateButton = (props) =>(
        <div> 
            <button className="big-button" onClick= 
                {props.handleCreate}> 
                Create Note
            </button> 
        </div>
); 


export default CreateButton;
