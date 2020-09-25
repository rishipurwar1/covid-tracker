import React, {useState, useEffect} from 'react';
import './App.css';
import covid from './api/covid'
import WorldWide from './components/WorldWide';
import List from './components/List';
import ShowChart from './components/ShowChart';
import Search from './components/Search';
import Spinner from './components/Spinner';

const App = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get worldwide cases
  const result = async () => {
    try {
      const response = await covid.get("/total");
      setData(response.data.data);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    result();
  },[]);

  //get country wise cases
  const listCountries = async () => {
    try {
      const response = await covid.get("/current");
      setList(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    listCountries();
  },[]);

  return  isLoading ? ( <Spinner />) : (
    <div className="App">
      <h1>Covid-19 Tracker</h1>
      <Search isLoading={isLoading} setIsLoading={(value) => setIsLoading(value)} searchData={(data) => setData(data)} />
      <WorldWide data={data} />
      <List list={list} data={data} />
      {/* <ShowChartd  /> */}
    </div>
  );
}

export default App;
