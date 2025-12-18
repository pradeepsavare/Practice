import React, { useContext } from 'react'
import { AppContext } from '../AppContext';

function Contact() {
    const { phone, address } = useContext(AppContext);
  return (
    <>
    <h2>Contact</h2>
    <p>Phone Number In Contact: {phone}</p>
    <p>Address In Contact: {address}</p>
    </>
  )
}

export default Contact