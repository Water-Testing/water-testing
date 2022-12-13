import React from 'react'
import { useState } from 'react';
import {Chart as ChartJS,
  ArcElement, Title, Tooltip, Legend,LineElement, CategoryScale, LinearScale, PointElement, Filler }
  from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  import { Line } from 'react-chartjs-2';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
      ArcElement, Title, Tooltip, Legend,LineElement, 
      CategoryScale, LinearScale, PointElement, Filler
  )

function Home() {
  //data to add into the charts

  const Data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projected Sales",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Actual sales",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  const data = {
    labels: ['Tests Completed', 'Tests Incomplete'],
    datasets: [{
        label: ' ',
        data: [37,9],
        backgroundColor:['green','red'],
        borderColor: ['green','red'],
}]
}


const options = {
}
  return (
    <div class = " w-screen h-screen content-center px-[10rem] bg-white dark:text-white dark:bg-gray-800">
      <div class=" flex-1 max-w-7xl ml-11 p-12">
        <h1 class = 'flex justify-center p-1 text-2xl font-bold'>Home</h1>

<div class = "mt-10 ml-[-8rem] w-[40rem] h-[45rem] rounded-2xl border-2 border-gray-200 bg-white drop-shadow-lg flex justify-center items-center dark:bg-gray-900">
  <div class = "items-center ">
    <h1 class = "px-16 pb-11 font-bold text-2xl">Monthly Test Performance</h1>
  <Doughnut data = {data}
  options = {options}></Doughnut>
  </div>
  <div>

  </div>
{/*<div class = "w-[10rem]flex items-center justify-center">
  <Doughnut data = {data}
  options = {options}></Doughnut>
  </div>*/}
</div>
<div class = ' mt-[-44.7rem] ml-[40rem] h-[45rem] rounded-lg bg-white w-[40rem] drop-shadow-lg border-2 border-gray-200'>
<div class = 'font-bold text-2xl mt-[5rem]  ml-[13rem] py-5  items-center justify-center'>Total tests Completed:</div>
       <h1 class = " text-9xl ml-[14rem] mt-[10rem]">450</h1> 
  </div>
</div>

</div>
 )
}

export default Home