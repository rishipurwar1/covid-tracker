import React, {useEffect, useState} from 'react'
import {Doughnut} from 'react-chartjs-2';
import covid from '../api/covid';

const ShowChart = ({data}) => {
    const [chartData, setChartData] = useState({});
    const covidData = [data.confirmed, data.active, data.recovered, data.deaths];
    useEffect(() => {
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
            <Doughnut 
            data={chartData} 
            options={{
                responsive: true,
                title: {text: 'covid cases'}
            }}
            />
        </div>
    )
}

export default ShowChart
