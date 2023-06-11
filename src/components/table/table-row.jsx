import React from 'react';

const styles = {
    cursor: 'pointer'
 };

const TableRow = (props) => {
    console.log('table',props)
   return (
    <li style={styles} onClick={() => props.checkAnswer(props.question.isCorrect, props.currentKey)}
        className={"list-group-item " + (props.markedAnswer.key === props.currentKey ? props.markedAnswer.variant : '')}>{props.question.content}
    </li>
   )
};

export default TableRow;