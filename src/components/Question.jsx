import React from 'react';

const Question = (props) => {

   return (
       <div>
            <h5 style={{position:'absolute',left:'-1000px'}}>Question: {props.currentIndex} out of {props.allQuestions}</h5>
            <h5 aria-hidden="true">Question: {props.currentIndex}/{props.allQuestions}</h5>
            <p>{props.currentQuestion.charAt(0).toUpperCase() + props.currentQuestion.slice(1)} {props.multipleSelection>1?"(more than one correct answer)":""}</p>
       </div>
   )
};

export default Question;



