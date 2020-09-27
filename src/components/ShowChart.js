import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2';

const ShowChart = ({data, value}) => {
    const [chartData, setChartData] = useState({});
    let country = value.charAt(0).toUpperCase() + value.slice(1);
    useEffect(() => {
        const covidData = [data.confirmed, data.active, data.recovered, data.deaths];
        const chart = () => {
            setChartData({
                labels: ['Confirmed', 'Active', 'Recovered', 'Death'],
                datasets: [
                    {
                        label: 'Covid-19 Cases',
                        data: covidData,
                        backgroundColor: [
                            '#88B3F8',
                            '#FB9648',
                            '#87CE92',
                            '#F95B5A'
                        ],
                        borderWidth: 1
                    }
                ]
            })
        }
        chart();
    },[data])
    return (
        <div className="chart-container">
            <h1 className="graph-title">{`${country} Covid-19 Cases Graph`}</h1>
            <Bar
            data={chartData} 
            options={{
                responsive: true,
            }}
            />
        </div>
    )
}

export default ShowChart
