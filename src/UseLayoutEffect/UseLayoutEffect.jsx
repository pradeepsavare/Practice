import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {


useEffect(() => {
    console.log('Message from useEffect');
  }, [])


//here useLayoutEffect will run before useEffect

  useLayoutEffect(() =>{
    console.log('Message from useLayoutEffect');
  }, [])

    
  return (
    <div>Test UseLayout Effect</div>
  )
}

export default UseLayoutEffect