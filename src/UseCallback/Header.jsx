import React from 'react'

function Header({ fun }) {
    console.log("Header component Rendered");
    fun();
    
  return (
    <>
    <h1>Header</h1>
    </>
  )
}
//we use useMemo in this file to memoize the Header component to prevent unnecessary re-renders when the parent component re-renders.
// export default Header not use this use below line
export default React.memo(Header);