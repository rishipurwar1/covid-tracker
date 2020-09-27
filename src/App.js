import React, {useState, useEffect} from 'react';
import './App.css';
import covid from './api/covid'
import ShowCard from './components/ShowCard';
import List from './components/List';
import Search from './components/Search';
import Spinner from './components/Spinner';
import ShowChart from './components/ShowChart'

const App = () => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let value;

  if(country === ''){
    value= 'WorldWide Cases'
  } else {
    value=country;
  }
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
      <h1 className="title">C<i className="fas fa-virus"></i>vid-19 Tracker</h1>
      <Search setValue={(q) => setCountry(q)} setIsLoading={(value) => setIsLoading(value)} searchData={(data) => setData(data)} />
      <ShowCard data={data} value={value} />
      <List list={list} data={data} />
      <ShowChart data={data} />
    </div>
  );
}

export default App;
