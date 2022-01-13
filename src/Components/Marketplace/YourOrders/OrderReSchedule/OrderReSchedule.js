import React,{useState} from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import veriCheck from './vricheck.png'
import './OrderReSchedule.css';
import OfferDateCalendar from '../utils/OfferDateCalendar/OfferDateCalendar';
import OrderReScheduleHelper from './OrderReScheduleHelper';
const OrderReSchedule = (props) => {
    const{setShowDefaultView, setShowComponent} = props;
    const [ selectedDates, setSelectedDates ] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(0);
    const [showReScHelper, setShowReScHelper] = useState(true)
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
    return (
        <div className="order-re-schedule-wrapper" style={{paddingBottom:'150px'}}>
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='orderDetails'></BackAndQuestion>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 100px'}}>
                <p style={{marginTop: '15px'}}>Veri-Check</p>
                <img style={{width:'100%'}} src={veriCheck} alt="" />
            </div>
            {
                showReScHelper?
                <div>
                     <p style={{fontSize:'14px', width:'80%'}}>Select your prefered date(s) and times for the service to be carrried out.</p>
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
                                    onClick={()=>{changeDateColor(index, date, 2)}}>Morning</div>
                                    <div style={{padding:'5px 10px', textAlign:'center', borderRadius:'10px'
                                    , background:`${JSON.stringify(date).split(" ")[6]}`}}
                                    onClick={()=>{changeDateColor(index, date, 3)}}>Morning</div>
                                    {/*  */}
                                </div>
                            </div>)
                    }
                    <div style={{margin:'40px auto 30px',position:'absolute', right:'10px', background:'#D00648', width:'100px',
                    textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}
                    onClick={() =>setShowReScHelper(false)}>CONFIRM</div>
                </div>
                :
                <OrderReScheduleHelper setShowComponent={setShowComponent}></OrderReScheduleHelper>
            }
            
        </div>
    );
};
// OrderReScheduleHelper
export default OrderReSchedule;