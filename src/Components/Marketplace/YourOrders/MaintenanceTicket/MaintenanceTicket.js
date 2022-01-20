import React,{useState} from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import OfferDateCalendar from '../utils/OfferDateCalendar/OfferDateCalendar';
import './MaintenanceTicket.css';
const MaintenanceTicket = (props) => {
    const{setShowDefaultView, setShowComponent} = props;
    const [ selectedDates, setSelectedDates ] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(0);
    const [offeredDates, setOfferedDates] = useState([
        {date:"15 January 2022", time:"Morning", id:"1"},
        {date:"16 May 2022", time:"Afternoon", id:"2"},
        {date:"17 June 2023", time:"Evening", id:"3"},
    ]);
    const changeDateColor =(index, date, btnNum)=>{
        if(btnNum === 1) {
            if(JSON.stringify(date).split(" ")[4] === '#3A3339'){
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #67255C #3A3339 #3A3339 ${JSON.stringify(date).split(" ")[7]} l`
            }else{
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #3A3339 #3A3339 #3A3339 ${JSON.stringify(date).split(" ")[7]} l`
            }
        }
        if(btnNum === 2) {
            if(JSON.stringify(date).split(" ")[5] === '#3A3339'){
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #3A3339 #67255C #3A3339 ${JSON.stringify(date).split(" ")[7]} l`
            }else{
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #3A3339 #3A3339 #3A3339 ${JSON.stringify(date).split(" ")[7]} l`
            }
        }
        if(btnNum ===3) {
            if(JSON.stringify(date).split(" ")[6] === '#3A3339'){
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #3A3339 #3A3339 #67255C ${JSON.stringify(date).split(" ")[7]} l`
            }else{
                selectedDates[index] =`f ${JSON.stringify(date).split(" ")[1]} ${JSON.stringify(date).split(" ")[2]} ${JSON.stringify(date).split(" ")[3]} #3A3339 #3A3339 #3A3339 ${JSON.stringify(date).split(" ")[7]} l`
            }
        }
        setForceUpdate(forceUpdate+1);
    }
    const removeFromDates = (date)=>{
        function check(arrayDate) {
            return arrayDate !== date;
          }
        console.log(date);
        const temp = selectedDates.filter(check);
        setSelectedDates(temp);
    }
    // f 15 January 2022 #3A3339 #3A3339 #3A3339 idd9dcfec11f801 l
    return (
        <div className="maintenance-ticket-compo-wrapper" style={{paddingBottom:'100px'}}>
           <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='orderDetails'></BackAndQuestion>
                <h4 style={{margin:'10px auto', fontSize:'22px'}}>Product Name (Vendor)</h4>
            </div>
            <p style={{fontSize:'15px', width:'80%', marginBottom:'25px'}}>The vendor has proposed the following times for the service.</p>
            {/* It should be a dynamic section */}
            {
                offeredDates.map((date, i) => 
                <div>
                    <p 
                        style={{textAlign:'center', fontSize:'15px', marginBottom:'10px', marginTop:'18px'}}
                        >{date.time} of {date.date.split(" ")[0]} {date.date.split(" ")[1]} {date.date.split(" ")[2]}</p>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gridGap:'10px'}}>
                        <div style={{textAlign:'center', fontSize:'14px', padding:'6px 10px', borderRadius:'30px', background:'#2F7F2D'}}
                        onClick={() =>setShowComponent('acceptOrder')}>ACCEPT</div>
                        <div 
                            style={{textAlign:'center', fontSize:'14px', padding:'6px 10px', borderRadius:'30px', background:'#D00648'}}
                            onClick={() =>setOfferedDates(offeredDates.filter(offeredDate =>offeredDate.id !== date.id))}
                            >DECLINE</div>
                    </div>
                </div>)
            }
            <p style={{textAlign:'center', fontSize:'14px', marginTop:'30px'}}>Or alternatively select other date(s) you can do:</p>
            <OfferDateCalendar selectedDates={selectedDates} setSelectedDates={setSelectedDates}></OfferDateCalendar>
            <p>Dates selected:</p>
            {
                selectedDates.map((date, index) =>
                    <div key={index}>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 20px', marginTop:'18px', marginBottom:'-8px'}}>
                            <p style={{textAlign: 'center',fontSize:'15px'}}>{JSON.stringify(date).split(" ")[1] } {' '}
                                {JSON.stringify(date).split(" ")[2] }{' '}{JSON.stringify(date).split(" ")[3] } 
                            </p>
                            <p style={{fontSize:'15px'}}
                            onClick={() =>{removeFromDates(date)}}>X</p>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gridGap:'10px'}}>
                            <div style={{padding:'5px 10px', textAlign:'center', borderRadius:'10px'
                            , background:`${JSON.stringify(date).split(" ")[4]}`}}
                            onClick={()=>{changeDateColor(index, date, 1)}}>Morning</div>
                            <div style={{padding:'5px 10px', textAlign:'center',  borderRadius:'10px'
                            , background:`${JSON.stringify(date).split(" ")[5]}`}}
                            onClick={()=>{changeDateColor(index, date, 2)}}>Afternoon</div>
                            <div style={{padding:'5px 10px', textAlign:'center', borderRadius:'10px'
                            , background:`${JSON.stringify(date).split(" ")[6]}`}}
                            onClick={()=>{changeDateColor(index, date, 3)}}>Evening</div>
                            {/*  */}
                        </div>
                    </div>)
            }
            <div style={{background:'#93227F', padding:'5px 10px', textAlign:'center', borderRadius:'30px', marginTop:'30px'}}>SEND PROPOSED DATES</div>
        </div>
    );
};

export default MaintenanceTicket;