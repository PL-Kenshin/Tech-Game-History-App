import React, { useEffect } from 'react';
import strings from '../locale/strings';

const Points = (props) => {

   strings.setLanguage(localStorage.getItem("language"))
    
   useEffect(() => {
      strings.setLanguage(props.language)
   },[props.language])

   return (
    <p>{props.points}/{props.maxPoints} {strings.points}</p>

   )
};

export default Points;