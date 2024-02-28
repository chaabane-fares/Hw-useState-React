import { useState } from 'react';
import './App.css';
import LeftCard from './Components/LeftCard';
import RightCards from './Components/RightCard';

function App() {
  const [val , SetVal]=useState("week")
  function handleDailyClick(){
    SetVal("Daily")
  }
  function handleWeeklyClick(){
    SetVal("Weekly")
  }
  function handleMonthlyClick(){
    SetVal("Monthly")
  }
  const cards =[
    {
      value:"Work",hours:32,period:{val},bgColor:'#FF8B64'
    },
    {
      value:"Play",hours:10,period:'Week',bgColor:'#56C2E6'
    },
    {
      value:"Study",hours:4,period:'Week',bgColor:'#FF5E7D'
    },
    {
      value:"Exercise",hours:4,period:'Week',bgColor:'#4BCF83'
    },
    {
      value:"Social",hours:5,period:'Week',bgColor:'#7235D1'
    },
    {
      value:"Self care",hours:2,period:'Week',bgColor:'#F1C75B'
    },
    //const [day,setDay]=useState("Daily")
   //function handleDailyClick(){
    //setDay()
   //}

  ]
  return (
    <div className="App">
      <div className='left'>
         <LeftCard/>
      </div>
      <div className='right'>
        {
          cards.length>0 && cards.map((card)=>(
              <RightCards value={card?.value} hours={card?.hours} period={card?.period} bgColor={card?.bgColor}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
