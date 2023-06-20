import React from 'react';

const Question = (props) => {

   return (
       <div>
           <p>Question: {props.currentIndex}/{props.allQuestions}</p>
           <p>{props.currentQuestion.charAt(0).toUpperCase() + props.currentQuestion.slice(1)} {props.multipleSelection>1?"(more than one correct answer)":""}</p>
       </div>
   )
};

export default Question;



