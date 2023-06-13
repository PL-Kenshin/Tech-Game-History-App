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
let index = 0;

const ComponentQuiz = (props) => {
    const [isReady, setIsReady] = useState(false)

    //Stworzenie niezbędnych hook;ów
    let { id } = useParams();
    let nav = useNavigate()
    useEffect(() => {
        console.log("us", id)
        if (!id || id > quiz.length || isNaN(id) || id < 1 || quiz.length < 1) {
            setIsReady(false)
            nav("/")
        } else {
            setQuestion(quiz[id - 1].questions[currentIndex])
            setIsReady(true)
        }

    }, [id, nav])

    console.log(id)
    const [currentIndex, setIndex] = useState(0);
    const [currentQuestion, setQuestion] = useState(null);
    const [currentPoints, setPoints] = useState(0);
    const [allowToChoose, changePermission] = useState(true);
    const [markedAnswer, markAnswer] = useState({ key: [-1], variant: '' });
    const [correctNumber, setCorrectNumber] = useState(1)
    const [answerCount, setAnswerCount] = useState(0)

    useEffect(() => {
        return () => {
            setIndex(0)
            setQuestion(null)
            setPoints(0)
            changePermission(true)
            markAnswer({ key: [-1], variant: '' })

        }
    }, [])

    const handleNextQuestion = () => {
        index++;
        const nextValue = currentIndex + 1;
        if (nextValue > quiz[id - 1].questions.length - 1) {
            setIndex(quiz[id - 1].questions.length - 1);
            return;
        }
        setIndex(nextValue);
        setQuestion(quiz[id - 1].questions[nextValue]);
        changePermission(true);
        markAnswer({ key: [-1], variant: '' });
        let number = quiz[id - 1].questions[nextValue].answers.filter((obj) => obj.isCorrect === true).length
        setCorrectNumber(number)
        setAnswerCount(0)
    };

    const handleCheckAnswer = (chosenOption, key) => {

        if (currentPoints < 20) {
            if (!allowToChoose) {
                return;
            }
            if (chosenOption) {
                const points = currentPoints + 1;
                setPoints(points);
                setAnswerCount(answerCount + 1)
                console.log("corr", correctNumber, "ans", answerCount)
                if (correctNumber == answerCount) {
                    console.log('block')
                    changePermission(false);
                }
                markAnswer({ key:[...markedAnswer.key, key] , variant: 'bg-success' })
            } else {
                console.log("corr", correctNumber, "ans", answerCount)

                setAnswerCount(answerCount + 1)
                if (correctNumber == answerCount+1) {
                    console.log('block')
                    changePermission(false);
                }
                markAnswer({ key:[...markedAnswer.key, key] , variant: 'bg-danger' })
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
                    allQuestions={quiz[id - 1].questions.length}
                    multipleSelection={correctNumber}>
                </Question>
                <Answers className="col-12"
                    checkAnswer={handleCheckAnswer}
                    currentAnswers={currentQuestion.answers}
                    markedAnswer={markedAnswer} />
                <Results points={currentPoints} />
                <Actions
                    disableNext={currentIndex !== quiz[id - 1].questions.length - 1}
                    next={handleNextQuestion} />
            </div>}
        </div>
    )
};

export default ComponentQuiz;
