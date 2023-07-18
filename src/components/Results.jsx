import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDoc from './document';
import { useNavigate } from 'react-router-dom';

const Results = (props) => {
    const nav = useNavigate()
    let maxPoints = props.quiz.questions.reduce((acc, curr) => acc + curr.answers.filter((obj)=>obj.isCorrect===true).length, 0)
    const passed = props.points>=0.75*maxPoints?true:false
   return (
    <div className='d-flex flex-column align-items-center mb-5'>
        <h1 className='text-center mb-3 display-4'>{props.quiz.topic}</h1>
        <img src="/logo.png" width="240" height="192" alt="Tech-Game History App" className='mb-2'></img>
        {passed && <h2 className='text-center'>Congratulations</h2>}
        {!passed && <h2 className='text-center'>Unfortunately</h2>}
        {passed && <h3 className='text-center'>You have passed the quiz with {props.points}/{maxPoints} points</h3>}
        {!passed && <h3 className='text-center'>You have failed the quiz with {props.points}/{maxPoints} points</h3>}
        {passed && <div className='text-center'>You can download confirmation document with your answers here:</div>}
        {!passed && <div className='text-center'>You can try again</div>}
        {passed && <PDFDownloadLink document={<MyDoc quiz={props.quiz} answers={props.answers} points={props.points} maxPoints={maxPoints} />} fileName='Certificate_TechGame.pdf'>
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>}
        <button className='btn btn-primary mt-5' onClick={e => {e.preventDefault(); nav('/')}}>Go back</button>
    </div>
   )
};

export default Results;