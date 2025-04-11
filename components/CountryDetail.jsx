import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function CountryDetail() {
  const { name } = useParams(); // get the country name from the URL
  const [country, setCountry] = useState(null); // initially set to null, instead of an empty object
  const nav = useNavigate(); // navigate function

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        // Fetch the data from the local JSON file
        const response = await axios.get("/src/data.json");

        // Find the country by name (make sure the response data is an array)
        const countryData = response.data.find((country) => country.name === name);

        // If countryData is found, set the state, otherwise log an error or handle as needed
        if (countryData) {
          setCountry(countryData);
        } else {
          console.error("Country not found");
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountry();
  }, [name]); // refetch when the country name in the URL changes

  // Conditional rendering: wait for the country data to be loaded before rendering
  if (!country) {
    return <div>Loading...</div>; // or a loader/spinner
  }

  return (
    <>
      <Header />
      <div className="country-detail-container">
        <button className="back-button" onClick={() => nav("/")}>
          <img src="/images/back.png" style={{ width: "20px", height: "20px" }} alt="" />
          <p>Back</p>
        </button>

        <div className="country-detail">
          <img src={country.flag} style={{ width: "50%" }} alt={country.name} />
          <div className="country-detail-description">
            <h2>{country.name}</h2>
            <p><span className="bold">Native Name:</span>  {country.nativeName}</p>
            <p><span className="bold">Population:</span> {country.population}</p>
            <p><span className="bold">Region:</span> {country.region}</p>
            <p><span className="bold">Sub Region:</span> {country.subregion}</p>
            <p><span className="bold">Capital:</span> {country.capital}</p>
            <p><span className="bold">Top Level Domain:</span> {country.topLevelDomain}</p>
            <p><span className="bold">Currencies:</span> {country.currencies.map(currency => currency.name).join(", ")}</p>
            <p><span className="bold">Languages:</span> {country.languages.map(language => language.name).join(", ")}</p>

            <div className="country-detail-border-countries">
              <h3>Border Countries:</h3>
              <div className="border-countries">
                {country.borders ? country.borders.map((borderCountry, index) => (
                  <button key={index} className="border-country">{borderCountry}</button>
                )) : <p>No border countries available</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
