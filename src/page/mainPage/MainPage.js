import React from 'react';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addNumberAction, clearNumberAction} from "../../redux/actions";
import ResultsList from "../../components/resultsList/ResultsList";

function MainPage () {
    const dispatch = useDispatch()

    const [number, setNumber] = useState(0)

    const addNumber = () => {
        dispatch(addNumberAction(number))
    }
    const clearNumber = () => {
        dispatch(clearNumberAction())
    }

    return (
        <>
            <input type="number" onChange={(event)=>setNumber(+event.target.value)}/>
            <button onClick={addNumber}>add</button>
            <button onClick={clearNumber}>clear</button>
            <ResultsList/>
        </>
    );
}
export default MainPage;