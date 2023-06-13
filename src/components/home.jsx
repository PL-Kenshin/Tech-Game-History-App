import React from "react";
import {Link } from "react-router-dom";
const quiz = require('../quiz.json')

const Home = (props) => {
    
    let quizList = [...quiz]
    return (
        <div>
            <h1 className="text-center">Pick quiz Topic</h1>
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
        </div>
    )

}

export default Home;