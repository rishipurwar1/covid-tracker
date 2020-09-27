import React, {useState} from 'react'
import covid from '../api/covid'

const Search = ({searchData, setIsLoading, setValue}) => {
    const [country, setCountry] = useState('');
    const onChange = (q) => {
        setCountry(q);
    }

    const onSubmit=(e) => {
        e.preventDefault();
        setIsLoading(true);
        setValue(country);
        const searchCountry = async (country) => {
            const response = await covid.get(`/country/${country}`);
            searchData(response.data.data)
            setIsLoading(false)
        }
        searchCountry(country);
        setCountry('')
    }

    return (
        <section className="search">
            <form action="" onSubmit={onSubmit}>
                <input type="text" className="form-control" placeholder="Search Country" autoFocus value={country} onChange={(e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
