import * as React from 'react';
import { useState, useEffect } from 'react';
import './MarketPlaceCalendar.css';

const MarketPlaceCalendar = ( props ) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  return (
    <div className="frame ">
      <div className="header">
        <div style={{ fontSize:'30px', cursor: 'pointer'}}onClick={() => setDate(new Date(year, month - 1, day))}>&#8249;</div>
        <div style={{ marginTop:'15px', fontSize:'15px'}}>
          {MONTHS[month]} {year}
        </div>
        <div style={{ fontSize:'30px', cursor: 'pointer'}}onClick={() => setDate(new Date(year, month + 1, day))}>&#8250;</div>
      </div>
      <div className="body">
        {DAYS_OF_THE_WEEK.map((d) => (
          <day className='day' key={d} >
            <strong style={{color: '#636A77'}}>{d}</strong>
          </day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            var eventsToday=[]
            return (
              <day 
                key={index}
                className={`today day ${d === today.getDate() ? "today" : ""} ${d === day ? "selected" : ""}`}
                // isToday={d === today.getDate()}
                // isSelected={d === day}
                // onClick={() => setDate(new Date(year, month, d))}
              >
                {
                (eventsToday.length === 0 )&& 
                <div style={{backgroundColor:''}}>{d > 0 ? d : ''}</div>
                }
                {
                (eventsToday.length > 0 )&& 
                  <div>
                    <div>{d > 0 ? d : ''}</div>
                    {
                    eventsToday.map((eventToday, index)=>
                    <div style={{width:'5px', height:'5px', borderRadius:'50%', float:'left',margin:'auto', marginLeft:'3px',
                       backgroundColor:`${eventToday.color}`}} key={index}></div>)
                  }
                  </div>
                }
              </day>
            );
          })}
      </div>
    </div>
  );
}


export default MarketPlaceCalendar;