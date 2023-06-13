import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import quiz from '../quiz.json';
import Question from "./Question";
import Answers from "./Answers";
import Results from './Results';
import Actions from './Actions';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

let answeredQuestions = [];
let index = 0;

const ComponentQuiz = (props) => {
    const [isReady, setIsReady] = useState(false)

    //Stworzenie niezbędnych hook;ów
    let { id } = useParams();
    let nav = useNavigate()
    useEffect(()=>{
        console.log("us",id)
        if(!id || id > quiz.length || isNaN(id) || id < 1 || quiz.length < 1) {
            setIsReady(false)
            nav("/")
        } else{
            setQuestion(quiz[id-1].questions[currentIndex])
            setIsReady(true)
        }

    },[id, nav])

    console.log(id)
    const [currentIndex, setIndex] = useState(0);
    const [currentQuestion, setQuestion] = useState(null);
    const [currentPoints, setPoints] = useState(0);
    const [allowToChoose, changePermission] = useState(true);
    const [markedAnswer, markAnswer] = useState({ key: -1, variant: '' });

    useEffect(() => {
        return () => {
            setIndex(0)
            setQuestion(null)
            setPoints(0)
            changePermission(true)
            markAnswer({ key: -1, variant: '' })
            answeredQuestions = []
            
        }
    },[])

    const handleNextQuestion = () => {
        index++;
        const nextValue = currentIndex + 1;
        if (nextValue > quiz[id-1].questions.length - 1) {
            setIndex(quiz[id-1].questions.length - 1);
            return;
        }
        setIndex(nextValue);
        setQuestion(quiz[id-1].questions[nextValue]);
        changePermission(true);
        markAnswer({ key: -1, variant: '' });
    };

    const handleCheckAnswer = (chosenOption, key) => {
        if (!answeredQuestions.includes(currentIndex)) {
            console.log(answeredQuestions);
            if (currentPoints < 20) {
                answeredQuestions.push(currentIndex);
                console.log(currentIndex);
                console.log("lista :" + answeredQuestions);
                if (!allowToChoose) {
                    return;
                }
                if (chosenOption) {
                    const points = currentPoints + 1;
                    setPoints(points);
                    changePermission(false);
                    markAnswer({ key, variant: 'bg-success' })
                } else {
                    changePermission(false);
                    markAnswer({ key, variant: 'bg-danger' })
                }
            }
        }
    };

    return (
        <div style={styles}>
            {isReady && <div className="containter">
            <Question
            className="col-12"
            currentQuestion={currentQuestion.question}
            currentIndex={currentIndex + 1}
            allQuestions={quiz[id-1].questions.length}>
            </Question>
            <Answers className="col-12"
                    checkAnswer={handleCheckAnswer}
                    currentAnswers={currentQuestion.answers}
                    markedAnswer={markedAnswer}/>
            <Results points={currentPoints}/>
            <Actions
                disableNext={currentIndex !== quiz[id-1].questions.length - 1}
                next={handleNextQuestion}/>
            </div>}
        </div>
    )
};

export default ComponentQuiz;
