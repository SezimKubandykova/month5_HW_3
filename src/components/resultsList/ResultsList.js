import React from "react";
import {useSelector} from "react-redux";

function ResultsList (props) {
    const numbers = useSelector (state => state.numbersReducer.sum)
    return (
        <ul>
            {numbers.map((number, key)=><li key={key}>{number}</li>)}
        </ul>
    )
}
export default ResultsList