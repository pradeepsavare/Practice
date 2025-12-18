import React, { useReducer } from 'react'

function UseReducer() {

    const initialState = 0;

    const reduser = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    }

    const reduserToggle = (state) =>!state;

    const [state, dispatch] = useReducer(reduser, initialState);

    const[isOn,dispatchToggle]= useReducer(reduserToggle,false);

    return (
        <>
            <h1>Example of UseReducer</h1>
            <br />
            <h2>{state}</h2>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Increase</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrese</button>
            <hr />
            <h1>UserReducer for Toggle</h1>
            <h1>{isOn ? 'ON' : 'OFF'}</h1>
            <button onClick={dispatchToggle}>Toggle</button>
        </>
    )
}

export default UseReducer