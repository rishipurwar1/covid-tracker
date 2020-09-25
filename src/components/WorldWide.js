import React from 'react';
import Case from './Case';

const WorldWide = ({data}) => {
    return (
        <div className="container">
            <div className="world">
                <Case data={data.confirmed} value="Confirmed" />
                <Case data={data.active} value="Active" />
                <Case data={data.recovered} value="Recovered" />
                <Case data={data.deaths} value="Death" />
            </div>
        </div>
    )
}

export default WorldWide;
