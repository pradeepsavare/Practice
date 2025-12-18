import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 2000)
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').
      then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
    console.log(data.length);
  }, [])

  return (
    <>
      <p>This is Timer , {count}</p>

      {/* https://jsonplaceholder.typicode.com/posts */}
      <hr />
      <h3>Posts:</h3>
      <ul>
        {data.map(post => (
          <li id={post.id}>{post.title}</li>
        ))}
      </ul>

    </>
  )
}

export default UseEffect