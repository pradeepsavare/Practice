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

    const [state, dispatch] = useReducer(reduser, initialState);

    return (
        <>
            <h1>Example of UseReducer</h1>
            <br />
            <h2>{state}</h2>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Increase</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrese</button>

        </>
    )
}

export default UseReducer