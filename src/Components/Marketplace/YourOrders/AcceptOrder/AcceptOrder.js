import React from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import confirm from './image/confirm.png';
import finish from './image/finish.png';
import pay from './image/pay.png';
import question from './image/question.png';
import './AcceptOrder.css';
const AcceptOrder = (props) => {
    const{setShowDefaultView, setShowComponent} = props;
    return (
        <div className='accept-order-wrapper'>
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='maintenanceTicket'></BackAndQuestion>
                <h4 style={{margin:'10px auto', fontSize:'22px'}}>Order details</h4>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Service:</p>
                <p style={{fontSize:'15px'}}>Product name</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Amount:</p>
                <p style={{fontSize:'15px'}}>£xyz.xy</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Description:</p>
                <p style={{fontSize:'15px'}}>Window Cleaning Premium package</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Order Address:</p>
                <p style={{fontSize:'15px'}}>Omnihouse Ltd 1, Mayfair Plc <br /> WIJ 8AJ</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Property:</p>
                <p style={{fontSize:'15px'}}>First Line of address</p>
            </div>
            <p style={{margin:'20px auto 25px'}}>Tap to action</p>
            <div style={{height:'5px', backgroundColor:'#453A45', borderRadius:'5px', marginTop:'10px'}}></div>
            <div style={{width:'280px', margin:'-30px auto 0', display:'grid', gridTemplateColumns:'repeat(4,60px)',gridGap:'10px'}}>
                <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                <img src={question} style={{width:'40px',height:'40px', marginTop:'10px', marginLeft:'10px'}}
                onClick={()=>setShowComponent('maintenanceTicket')} alt="" />
                <img src={pay} style={{width:'70%',padding:'10px',height:'40px', marginTop:'10px', marginLeft:'10px', borderRadius:'50%',backgroundColor:'#93227F'}} alt="" />
                <img src={finish} style={{width:'100%',height:'53px'}} alt="" />
            </div>
            <div style={{width:'280px',margin:'0 auto 0',display:'grid', gridTemplateColumns:'repeat(4,60px)',gridGap:'10px', textAlign:'center'}}>
                <div>
                    <p style={{fontSize:'14px'}}>Requested</p>
                    <p style={{fontSize:'12px', marginTop:'-15px'}}>06/03/2021</p>
                </div>
                <div>
                    <p style={{fontSize:'14px'}}>Confirm</p>
                </div>
                <p style={{fontSize:'14px'}}>Payment</p>
                <p style={{fontSize:'14px'}}>Finished</p>
            </div>
            <p style={{marginTop:'20px', textAlign:'center', fontWeight:'bold'}}>RE-SCHEDULE</p>
            <p style={{textAlign:'center', fontWeight:'bold'}}>PAY</p>
            <p style={{textAlign:'center', fontWeight:'bold'}}>CANCEL BOOKING</p>
        </div>
    );
};

export default AcceptOrder;