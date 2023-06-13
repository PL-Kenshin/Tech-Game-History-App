import React from 'react';

const styles = {
    cursor: 'pointer'
 };

const TableRow = (props) => {
   return (
    <li style={styles} onClick={() => props.checkAnswer(props.question.isCorrect, props.currentKey)}
        className={"list-group-item " + (props.markedAnswer.key.includes(props.currentKey) ? props.markedAnswer.variant : '')}>{props.question.content}
    </li>
   )//do zrobienia poprawienie kluczy i odpowiadających im kolorom poprawności odpowiedzi
};

export default TableRow;