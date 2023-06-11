import React from 'react';

const Actions = (props) => {

   return (
    <div>
        <div className="d-flex justify-content-between">
            {props.disableNext &&
            <button onClick={props.next} type="button" className="btn btn-success">Next</button>}
        </div>
    </div>

   )
};

export default Actions;