import React from 'react';
import Header from "../components/Header";
import { Router,Route } from 'react-router-dom';
import Countries from "../components/Countries";


function Home(){
 return( 
        <>
        <Header />
        <Countries />
        </>
 )
};

export default Home;