import React, { useRef } from 'react'

function UseRef() {

    // creating reference using useRef hook for accessing DOM element

    const inputElment = useRef();

    const ClickBtn = () => {
        console.log(inputElment.current.value);
        console.log(inputElment.current);
        inputElment.current.style.background = 'gray';
        inputElment.current.style.color = 'white';
    }

  return (
    <>
    <input type="text" ref={inputElment} />
    <button onClick={ClickBtn}>Click</button>
    </>
  )
}

export default UseRef