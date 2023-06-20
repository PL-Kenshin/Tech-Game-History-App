import React, { useEffect, useState } from 'react';

const styles = {
    cursor: 'pointer'
 };

const TableRow = (props) => {
    let fun = props.markedAnswer.filter((obj) => obj.key === props.currentKey)
    let isMarked = fun.length
    let currentContrast = JSON.parse(localStorage.getItem('isHighContrastOn'))
    const [highContrast,setHighContrast] = useState(currentContrast)
    useEffect(() => {
        const listener = () => {
            let contrast = JSON.parse(localStorage.getItem("isHighContrastOn"))
            setHighContrast(contrast)
        }

        window.addEventListener('contrast',listener)
        return () => {
            window.removeEventListener('contrast',listener)
        }
    },[highContrast])
   return (
    <li style={styles} onClick={() => props.checkAnswer(props.answer.isCorrect, props.currentKey)}
        className={"list-group-item " + (isMarked>0 ? fun[0]?.variant : '')}>{props.answer.content.charAt(0).toUpperCase() + props.answer.content.slice(1)} {highContrast?(isMarked>0?fun[0]?.variant==="bg-success"?"✓":"✗":""):""}
    </li>
   )//✓✗
};

export default TableRow;