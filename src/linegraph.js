import React,{useState,useEffect} from 'react';
import {Line} from "react-chartjs-2";
function Linegraph() {
   const [data,setData]= useState({});

   useEffect(()=>{
    fetch()
    .then('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
    .then(response=>response.json())
    .then(data=>{
      //hi//

    })
   },[])

  return (
    <div>
      <h1>I'm a graph</h1>
        {/*<Line data options>*/}
    </div>
  )
}

export default Linegraph;