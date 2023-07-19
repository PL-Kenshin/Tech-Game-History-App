import React, { useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDoc from './document';
import { useNavigate } from 'react-router-dom';
import strings from '../locale/strings';

const Results = (props) => {
    const nav = useNavigate()
    let maxPoints = props.quiz.questions.reduce((acc, curr) => acc + curr.answers.filter((obj)=>obj.isCorrect===true).length, 0)
    const passed = props.points>=0.75*maxPoints?true:false

    strings.setLanguage(localStorage.getItem("language"))
    
    useEffect(() => {
        strings.setLanguage(props.language)
    },[props.language])
    
   return (
    <div className='d-flex flex-column align-items-center mb-5'>
        <h1 className='text-center mb-3 display-4'>{props.quiz.topic}</h1>
        <img src="/logo.png" width="240" height="192" alt="Tech-Game History App" className='mb-2'></img>
        {passed && <h2 className='text-center'>{strings.congratulations}</h2>}
        {!passed && <h2 className='text-center'>{strings.unfortunately}</h2>}
        {passed && <h5 style={{position:'absolute',left:'-1000px'}}>{strings.passed} {props.points} {strings.outOf} {maxPoints} {strings.points}</h5>}
        {passed && <h3 className='text-center' aria-hidden>{strings.passed} {props.points}/{maxPoints} {strings.points}</h3>}
        {!passed && <h5 style={{position:'absolute',left:'-1000px'}}>{strings.failed} {props.points} {strings.outOf} {maxPoints} {strings.points}</h5>}
        {!passed && <h3 className='text-center' aria-hidden>{strings.failed} {props.points}/{maxPoints} {strings.points}</h3>}
        {passed && <div className='text-center'>{strings.download}</div>}
        {!passed && <div className='text-center'>{strings.tryAgain}</div>}
        {passed && <PDFDownloadLink document={<MyDoc language={props.language} quiz={props.quiz} answers={props.answers} points={props.points} maxPoints={maxPoints} />} fileName={`${strings.certificate}_TechGame.pdf`}>
        {({ loading }) => (loading ? strings.loadDoc : strings.dldNow)}
        </PDFDownloadLink>}
        <button className='btn btn-primary mt-5' onClick={e => {e.preventDefault(); nav('/')}}>{strings.goBack}</button>
    </div>
   )
};

export default Results;