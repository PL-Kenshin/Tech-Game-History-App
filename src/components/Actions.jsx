import React, { useEffect } from 'react';
import strings from '../locale/strings';

const Actions = (props) => {

    strings.setLanguage(localStorage.getItem("language"))
    
    useEffect(() => {
        strings.setLanguage(props.language)
    },[props.language])

   return (
    <div>
        <div className="d-flex justify-content-between">
            <button type="button" className='btn btn-secondary' onClick={e=> props.setContent(true)}>{strings.content}</button>
            {props.disableNext && <button onClick={props.next} type="button" className="btn btn-success">{strings.next}</button>}
            {!props.disableNext && <button type="button" className="btn btn-primary" onClick={props.setShowResults}>{strings.finish}</button>}
        </div>
    </div>

   )
};

export default Actions;