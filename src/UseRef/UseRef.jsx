import React, { useRef } from 'react'

function UseRef() {

    // creating reference using useRef hook for accessing DOM element

    const inputElment = useRef();
    const inputRef = useRef(null);
    const sectionRef = useRef(null);

    const focusInput = () => {
        // accessing the current property of inputRef to focus the input element
        inputRef.current.focus();
    }

    const scrollDown = ()=>{
      sectionRef.current.scrollIntoView({behavior:"smooth"});
    }

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
    <hr />
    <input type="text" ref={inputRef}/>
    <button onClick={focusInput}>Focus</button>
    <hr />
     <button onClick={scrollDown}>Go Down</button>

      <div style={{ height: "1000px" }}></div>

      <h2 ref={sectionRef}>Target Section</h2>
    </>
  )
}

export default UseRef