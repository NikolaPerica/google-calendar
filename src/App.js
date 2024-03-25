import './App.css';
import { getMonth } from './uitl';
import React, { useState, useContext, useEffect } from 'react';
import CalendarHeader from './components/CalendarHeader';
import SideBar from './components/SideBar';
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

function App() {
  console.table(getMonth())
  const [currentMonth, setCurrentMonth]=useState(getMonth())
  const {monthIndex, showEventModal}=useContext(GlobalContext)

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className='h-screen flex flex-col'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <SideBar />
          <Month month={currentMonth}/>

        </div>

      </div>

    </React.Fragment>
  );
}

export default App;
