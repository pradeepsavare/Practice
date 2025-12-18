import React, { useCallback, useState } from 'react'
import Header from './Header';

function UseCallback() {
    const [count,setCount] = useState(0);
    // not use below function directly because every time when parent component re-renders this function will be created again.
// const fun= ()  =>{}

    const fun = useCallback(() => {
        console.log("useCallback hook called");
    }, []); // dependency array

  return (
    <>
    {/* when we use useCallback hook it will memorize the function and will not recreate the function unless and until the dependency changes .if not it call above fun fuction every time when parent component re-renders. */}
    <Header fun={fun}/>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Click Here</button>
    </>
  )
}

export default UseCallback