import React from 'react'
import corona from '../images/coronavirus.svg'

const Case = ({data, value}) => {
    const number = data.toLocaleString();
    return (
        <div className="covid-data">
            <img className="corona" src={corona} alt=""/>
            <p className="type">{number} <span>{value}</span></p>
        </div>
    )
}

export default Case
