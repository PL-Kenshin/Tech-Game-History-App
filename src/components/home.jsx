import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

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
                    setIsReady(true)
                    break;
                case "it":
                    data = require('../data/it/quiz.json')
                    setQuizList([...data])
                    setIsReady(true)
                    break;
                default:
                    data = require('../data/en/quiz.json')
                    setQuizList([...data])
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
            <h1 className="text-center">Pick a quiz Topic</h1>
            <ul className="list-group mb-5">
                {quizList.map((quiz, key) =>
                (
                    <li className={"list-group-item d-flex flex-row"} key={key}>
                        <div className="d-flex flex-grow-1 justify-content-start align-items-center">Quiz: {quiz.topic}</div>
                        <div className="d-flex justify-content-end">
                            <Link to={`/quiz/${quiz.id}`}><button className={"btn btn-primary"}>Start</button></Link>
                        </div>
                    </li>
                ))}
            </ul>
            </div>}
        </div>
    )

}

export default Home;