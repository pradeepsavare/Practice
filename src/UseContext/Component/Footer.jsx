import React, { useContext } from 'react'
import { AppContext } from '../AppContext';

function Footer() {

    const { phone, address } = useContext(AppContext);
  return (
    <>
    <h1>Footer</h1>
    <p>Phone number in Footer: {phone}</p>
    <p>Address in Footer: {address}</p>
    </>
  )
}

export default Footer