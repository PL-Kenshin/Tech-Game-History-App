import React from 'react';
import { useParams } from "react-router-dom";
import content from '../content.json';

const Content = (props) => {
    let { id } = useParams();

    const clickHandler = (event) => {
        event.preventDefault()
        props.setContent(false)
    }

   return (
    <div className='col-md-8 mb-5'>
        <div className='card h-100'>
            <div className='card-body'>
                <h1 className='card-title text-center'>{content[id-1].title}</h1>
                <div className='card-text' style={{whiteSpace:'pre-line'}} dangerouslySetInnerHTML={{__html:content[id-1].content}}></div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-primary' onClick={e => clickHandler(e)}>Start quiz</button>
                </div> 
            </div>
        </div>
    </div>
   )
};

export default Content;