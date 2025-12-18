import React, { useState, useMemo } from 'react'

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const [num, setNum] = useState(2);
  const [dark, setDark] = useState(false);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  const style = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  const [search, setSearch] = useState("");

  const users = ["Pradeep", "Rahul", "Amit", "Sneha"];

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  function cubnum(num) {
    console.log("cubing number");
    return Math.pow(num, 3);
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

      <hr />
      <div style={style}>
        <h2>Factorial: {factorial}</h2>
        <button onClick={() => setNum(num + 1)}>Increase</button>
        <button onClick={() => setDark(!dark)}>Theme</button>
      </div>

      <hr />

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </>
  )
}

export default UseMemo