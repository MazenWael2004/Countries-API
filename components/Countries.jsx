import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';
import { useNavigate } from 'react-router-dom';

function Countries() {
    const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  // Fetch countries once on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("/src/data.json");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Filter countries based on search term and region
  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  // Handlers for input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <>
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-container"
          onChange={handleSearchChange}
        />
        <select
          className="filter-container"
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="countries-list">
        {filteredCountries.map((country, indx) => (
          <Country
            key={indx}
            flag={country.flags.png}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onClick={() => navigate(`/country/${country.name}`) } // Placeholder for navigation
          />
        ))}
      </div>
    </>
  );
}

export default Countries;
