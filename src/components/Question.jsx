import React, { useEffect } from 'react';
import strings from '../locale/strings';

const Question = (props) => {

    strings.setLanguage(localStorage.getItem("language"))
    
    useEffect(() => {
        strings.setLanguage(props.language)
    },[props.language])

   return (
       <div>
            <h5 style={{position:'absolute',left:'-1000px'}}>{strings.question} {props.currentIndex} {strings.outOf} {props.allQuestions}</h5>
            <h5 aria-hidden="true">{strings.question} {props.currentIndex}/{props.allQuestions}</h5>
            <p>{props.currentQuestion.charAt(0).toUpperCase() + props.currentQuestion.slice(1)} {props.multipleSelection>1?strings.multipleSelection:""}</p>
       </div>
   )
};

export default Question;



