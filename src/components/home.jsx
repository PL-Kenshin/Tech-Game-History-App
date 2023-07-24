import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import strings from '../locale/strings';

const Home = (props) => {
    const [language] = useOutletContext();
    const [isReady, setIsReady] = useState(false)
    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        const loadData = async () => {
            let data
            switch(localStorage.getItem("language")) {
                case "en":
                    data = require('../data/en/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('en')
                    setIsReady(true)
                    break;
                case "it":
                    data = require('../data/it/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('it')
                    setIsReady(true)
                    break;
                case "mk":
                    data = require('../data/mk/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('mk')
                    setIsReady(true)
                    break;
                case "pl":
                    data = require('../data/pl/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('pl')
                    setIsReady(true)
                    break;
                case "ro":
                    data = require('../data/ro/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('ro')
                    setIsReady(true)
                    break;
                default:
                    data = require('../data/en/quiz.json')
                    setQuizList([...data])
                    strings.setLanguage('en')
                    setIsReady(true)
                    break;
            }
        }
        loadData()
    },[language])
    
    // let quizList = [...quiz]
    return (
        <div>
            {isReady && <div>
            <h1 className="text-center">{strings.pick}</h1>
            <ul className="list-group mb-5">
                {quizList.map((quiz, key) =>
                (
                    <li className={"list-group-item d-flex flex-row"} key={key}>
                        <div className="d-flex flex-grow-1 justify-content-start align-items-center">{strings.quiz} {quiz.topic}</div>
                        <div className="d-flex justify-content-end">
                            <Link to={`/quiz/${quiz.id}`}><button className={"btn btn-primary"}>{strings.start}</button></Link>
                        </div>
                    </li>
                ))}
            </ul>
            </div>}
        </div>
    )

}

export default Home;