import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import Question from "./Question";
import Answers from "./Answers";
import Points from "./Points"
import Actions from './Actions';
import Results from './Results';
import Content from './Content';
import strings from '../locale/strings';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

const ComponentQuiz = (props) => {
    const [quiz, setQuiz] = useState(require('../data/en/quiz.json'))
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
    const [showContent, setShowContent] = useState(true)
    const [started,setStarted] = useState(false)
    const [language] = useOutletContext();
    let { id } = useParams();
    let nav = useNavigate()

    useEffect(() => {
        if (!id || id > quiz.length || isNaN(id) || id < 1 || quiz.length < 1) {
            setIsReady(false)
            nav("/")
        } else {
            const loadData = () => {
                let data
                switch(language) {
                    case "en":
                        data = require('../data/en/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                    case "it":
                        data = require('../data/it/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                    case "mk":
                        data = require('../data/mk/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                    case "pl":
                        data = require('../data/pl/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                    case "ro":
                        data = require('../data/ro/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                    default:
                        data = require('../data/en/quiz.json')
                        setQuiz(data)
                        strings.setLanguage(language)
                        setQuestion(data[id - 1].questions[currentIndex])
                        setIsReady(true)
                        break;
                }
            }
            loadData()
        }

    }, [id, nav, currentIndex, language, quiz.length])



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
            if (allowToChoose === false) {
                return
            } else {
                console.log('yes')
                setUserAnswers([...userAnswers, [currentQuestion.question, currentQuestion.answers[key]]])

                if (chosenOption) {
                    const points = currentPoints + 1;
                    setAnswerCount(answerCount + 1)
                    console.log("corr", correctNumber, "ans", answerCount)
                    if (correctNumber === answerCount + 1) {
                        console.log("corr", correctNumber, "answerCount", answerCount)
                        changePermission(false);
                    } //else {
                    setPoints(points);
                    markAnswer([...markedAnswer, { key: key, variant: 'bg-success' }])
                    //}

                } else {

                    setAnswerCount(answerCount + 1)
                    if (correctNumber === answerCount + 1) {
                        console.log("corr", correctNumber, "answerCount", answerCount)
                        changePermission(false);
                    } //else {
                    markAnswer([...markedAnswer, { key: key, variant: 'bg-danger' }])
                    //}

                }
            }

        }

    };

    return (
        <div style={styles}>
            {isReady ? showContent ? <Content language={language} setContent={setShowContent} setStarted={setStarted} started={started}/> : !showResults ? <div className="containter">
                <Question
                    language={language}
                    className="col-12"
                    currentQuestion={currentQuestion}
                    currentIndex={currentIndex + 1}
                    allQuestions={quiz[id - 1].questions.length}
                    multipleSelection={correctNumber}>
                </Question>
                <Answers className="col-12"
                    checkAnswer={handleCheckAnswer}
                    currentAnswers={currentQuestion.answers}
                    markedAnswer={markedAnswer} />
                {markedAnswer.length > 1 ?
                    currentQuestion.answers[markedAnswer[markedAnswer.length - 1].key]?.isCorrect === true ?
                        <div>{strings.correct} {markedAnswer.find(obj => obj.variant === 'bg-danger') ?
                            markedAnswer.length > correctNumber ?
                                strings.corr + currentQuestion.answers.map((elem, key) => { return elem.isCorrect === true ? (key + 1) + " " : "" }).join('')
                                : ""
                            : ""}
                        </div>
                        : <div>{strings.wrong} {markedAnswer.length > correctNumber ?
                            strings.corr + currentQuestion.answers.map((elem, key) => { return elem.isCorrect === true ? (key + 1) + " " : "" }).join('')
                            : ""}
                        </div>
                : <div></div>
                }
                <Points language={language} points={currentPoints} maxPoints={quiz[id - 1].questions.reduce((acc, curr) => acc + curr.answers.filter((obj) => obj.isCorrect === true).length, 0)} />
                <Actions
                    language={language}
                    disableNext={currentIndex !== quiz[id - 1].questions.length - 1}
                    next={handleNextQuestion}
                    setShowResults={setShowResults}
                    setContent={setShowContent} />

            </div> : <Results language={language} quiz={quiz[id - 1]} answers={userAnswers} points={currentPoints} /> : <div></div>}
        </div>
    )
};

export default ComponentQuiz;