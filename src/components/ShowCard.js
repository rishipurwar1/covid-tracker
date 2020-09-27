import React from 'react';
import Case from './Case';

const ShowCard = ({data, value}) => {
    let country = value.charAt(0).toUpperCase() + value.slice(1);
    return (
        <div className="container">
        <h1 className="heading">{value === 'WorldWide Cases' ? 'WorldWide Cases' : `Showing cases in ${country}`}</h1>
            <div className="world">
                <Case data={data.confirmed} value="Confirmed" />
                <Case data={data.active} value="Active" />
                <Case data={data.recovered} value="Recovered" />
                <Case data={data.deaths} value="Death" />
            </div>
        </div>
    )
}

export default ShowCard;
