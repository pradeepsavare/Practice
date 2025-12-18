import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount] = useState(0);

useEffect(() => {
setInterval(() => {
  setCount( count + 1);
},2000)
})
  return (
    <>
    <p>This is Timer , {count}</p>
    </>
  )
}

export default UseEffect