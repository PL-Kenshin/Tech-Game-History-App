import React from 'react';

const styles = {
    cursor: 'pointer'
 };

const TableRow = (props) => {
    console.log(props.markedAnswer)
    console.log(props.currentKey, props.markedAnswer[props.currentKey+1]?.variant)
    console.log(props.markedAnswer.filter((obj) => obj.key === props.currentKey))
   return (
    <li style={styles} onClick={() => props.checkAnswer(props.question.isCorrect, props.currentKey)}
        className={"list-group-item " + (props.markedAnswer.filter((obj) => obj.key === props.currentKey).length>0 ? props.markedAnswer[props.currentKey+1]?.variant : '')}>{props.question.content}
    </li>
   )//do zrobienia poprawienie kluczy i odpowiadających im kolorom poprawności odpowiedzi
};

export default TableRow;