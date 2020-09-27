import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const List = ({list, data}) => {
    return (
        <div className="list-container">
            <h1 className="country">Country Wise Cases</h1>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
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
            <p className="copyright">Made with <i className="fas fa-heart"></i> by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thefierycoder">Rishi Purwar</a></p>
        </div>
    )
}

export default List
