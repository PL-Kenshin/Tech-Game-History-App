import React from 'react';

const Question = (props) => {

   return (
       <div>
           <p>Question: {props.currentIndex}/{props.allQuestions}</p>
           <p>{props.currentQuestion} {props.multipleSelection>1?"(more than one correct answer)":""}</p>
       </div>
   )
};

export default Question;



