import React from 'react'
import { useParams } from "react-router-dom";

const ParamsComponent = (props) => {
    const {word, color, backgroundColor} = useParams();

  return (
    <div>
        {
            isNaN(word)?
            <p style={
                color?
                {color: color, backgroundColor: backgroundColor}
                :null
            }>
                <h1>This is a word: {word}</h1>
            </p>
            :
            <p>
                <h1>This is a number: {word}</h1>
            </p>
        }
    </div>
  )
}

export default ParamsComponent