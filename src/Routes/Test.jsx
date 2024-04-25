import React from 'react'
import ButtonMailto from './ButtonMailto'
import { Link } from "react-router-dom";

const Test = ({ mailto, label }) => {
  return (
    <>
<Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />






    </>
  )
}

export default Test