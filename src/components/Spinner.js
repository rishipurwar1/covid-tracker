import React from 'react'
import spinner from '../images/Searching.svg'

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="Loading"/>
        </div>
    )
}

export default Spinner
