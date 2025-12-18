import React,{ useState,useMemo} from 'react'

function UseMemo() {
    const [number,setNumber] = useState(0);
    const [counter,setCounter] = useState(0);

    function cubnum(num){
        console.log("cubing number");
        return Math.pow(num,3);
    }
    // this is without useMemo but it will cubing number on every render
    // const result = cubnum(number);

    // using useMemo to memoize the cubnum function
    const result = useMemo(() => cubnum(number), [number]);
  return (
    <>
    <h1>UseMemo Hook</h1>
    <hr />
    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
    <h2>The Cube of above number is {result}</h2>
    <hr />
    <h2>Counter value is {counter}</h2>
    <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>

    </>
  )
}

export default UseMemo