import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';

import quiz from '../quiz.json';
import Question from "./Question";
import Answers from "./Answers";
import Points from "./Points"
import Actions from './Actions';
import MyDoc from './document';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

const ComponentQuiz = (props) => {
    const [isReady, setIsReady] = useState(false)
    const [currentIndex, setIndex] = useState(0);
    const [currentQuestion, setQuestion] = useState(null);
    const [currentPoints, setPoints] = useState(0);
    const [allowToChoose, changePermission] = useState(true);
    const [markedAnswer, markAnswer] = useState([{ key: -1, variant: '' }]);
    const [correctNumber, setCorrectNumber] = useState(1)
    const [answerCount, setAnswerCount] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)

    let { id } = useParams();
    let nav = useNavigate()

    console.log(id)
    useEffect(() => {
        console.log("us", id)
        if (!id || id > quiz.length || isNaN(id) || id < 1 || quiz.length < 1) {
            setIsReady(false)
            nav("/")
        } else {
            setQuestion(quiz[id - 1].questions[currentIndex])
            setIsReady(true)
        }

    },[id, nav, currentIndex])



    useEffect(() => {
        return () => {
            setIndex(0)
            setQuestion(null)
            setPoints(0)
            changePermission(true)
            markAnswer([{ key: -1, variant: '' }])

        }
    }, [])


    const handleNextQuestion = () => {
        const nextValue = currentIndex + 1;
        if (nextValue > quiz[id - 1].questions.length - 1) {
            setIndex(quiz[id - 1].questions.length - 1);
            return;
        }
        setIndex(nextValue);
        setQuestion(quiz[id - 1].questions[nextValue]);
        changePermission(true);
        markAnswer([{ key: -1, variant: '' }]);
        let number = quiz[id - 1].questions[nextValue].answers.filter((obj) => obj.isCorrect === true).length
        setCorrectNumber(number)
        setAnswerCount(0)
    };

    const handleCheckAnswer = (chosenOption, key) => {
        console.log(currentQuestion.answers[key])
        if (currentPoints < 20) {
            if (!allowToChoose) {
                return;
            }

            setUserAnswers([...userAnswers, currentQuestion.answers[key]])

            if (chosenOption) {
                const points = currentPoints + 1;
                setAnswerCount(answerCount + 1)
                console.log("corr", correctNumber, "ans", answerCount)
                if (correctNumber === answerCount) {
                    console.log("corr", correctNumber, "answerCount", answerCount)
                    changePermission(false);
                } else {
                    setPoints(points);
                    markAnswer([...markedAnswer, { key: key, variant: 'bg-success' }])
                }

            } else {
                console.log("corr", correctNumber, "ans", answerCount)

                setAnswerCount(answerCount + 1)
                if (correctNumber === answerCount) {
                    console.log("corr", correctNumber, "answerCount", answerCount)
                    changePermission(false);
                } else {
                    markAnswer([...markedAnswer, { key: key, variant: 'bg-danger' }])
                }

            }
        }

    };
    console.log(showResults)
    return (
        <div style={styles}>
            {isReady? !showResults?<div className="containter">
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
                <Points points={currentPoints} maxPoints={quiz[id-1].questions.reduce((acc, curr) => acc + curr.answers.filter((obj)=>obj.isCorrect===true).length, 0)} />
                <Actions
                    disableNext={currentIndex !== quiz[id - 1].questions.length - 1}
                    next={handleNextQuestion}
                    setShowResults={setShowResults} />
                
            </div>:<div>
                    <div>a witam witam</div>
                    <PDFDownloadLink document={<MyDoc quiz={quiz[id - 1]} answers={userAnswers} />} fileName="mydoc.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                  </PDFDownloadLink>
                </div>:<div></div>}
        </div>
    )
};

export default ComponentQuiz;