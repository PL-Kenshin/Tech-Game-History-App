import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
const Content = (props) => {
    const [isReady, setIsReady] = useState(false)
    let { id } = useParams();
    const [content, setContent] = useState(null)

    const clickHandler = (event) => {
        event.preventDefault()
        props.setContent(false)
        props.setStarted(true)
        window.scrollTo(0,0)
    }

    useEffect(() => {
        console.log(props.language)
        const loadData = () => {
            let data
            switch(localStorage.getItem("language")) {
                case "en":
                    data = require('../data/en/content.json')
                    setContent(data)
                    setIsReady(true)
                    break;
                case "it":
                    data = require('../data/it/content.json')
                    setContent(data)
                    setIsReady(true)
                    break;
                default:
                    data = require('../data/en/content.json')
                    setContent(data)
                    setIsReady(true)
                    break;
            }
        }
        loadData()
    },[props.language])
   return (
    <div className='col-md-8 mb-5'>
        {isReady &&
        <div className='card h-100'>
            <div className='card-body'>
                <h1 className='card-title text-center'>{content[id-1].title}</h1>
                <div className='card-text' style={{whiteSpace:'pre-line'}} dangerouslySetInnerHTML={{__html:content[id-1].content}}></div>
                
                <h4 className='d-flex justify-content-center mt-4 text-center'>
                    To pass the quiz you have to get 75% correct answers.
                </h4>
                
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-primary' onClick={e => clickHandler(e)}>{props.started?"Continue":"Start quiz"}</button>
                </div> 
            </div>
        </div>}
    </div>
   )
};

export default Content;