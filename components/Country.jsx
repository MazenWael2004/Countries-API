import React from "react";


function Country(props){
  
    return(
        <div className="country-card" onClick={props.onClick}>
            <img src={props.flag} style={{width:"100%"}} alt="Country Flag" />
            <div className="country-description">
                <h3>{props.name}</h3>
                <p><span className='bold'>Population:</span> {props.population}</p>
                <p><span className='bold'>Region:</span> {props.region}</p>
                <p><span className='bold'>Capital:</span> {props.capital}</p>
            </div>
        </div>
    )
};

export default Country;