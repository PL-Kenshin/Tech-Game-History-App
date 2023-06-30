import React from 'react';

const Actions = (props) => {

   return (
    <div>
        <div className="d-flex justify-content-between">
            <button type="button" className='btn btn-secondary' onClick={e=> props.setContent(true)}>Content</button>
            {props.disableNext && <button onClick={props.next} type="button" className="btn btn-success">Next</button>}
            {!props.disableNext && <button type="button" className="btn btn-primary" onClick={props.setShowResults}>Finish</button>}
        </div>
    </div>

   )
};

export default Actions;