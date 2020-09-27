import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const List = ({list, data}) => {
    return (
        <div className="list-container">
                <table>
                <h1 className="country">Country Wise Cases</h1>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length && list.map(country => (
                            <tr key={uuidv4()}>
                                <td>{country.location}</td>
                                <td>{country.confirmed}</td>
                                <td>{country.active}</td>
                                <td>{country.recovered}</td>
                                <td>{country.deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default List
