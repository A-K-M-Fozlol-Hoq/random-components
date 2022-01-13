import React from 'react';
import confirm from './image/confirm.png';
import finish from './image/finish.png';
import pay from './image/pay.png';
const OrderReScheduleHelper = ({setShowComponent}) => {
    return (
        <div>
            <p style={{fontSize:'14px', width:'80%'}}>Your booking request has been sent to the vendor, they will either accept the booking slot or suggest another.</p>
            <p style={{fontSize:'14px', width:'80%'}}>You will see the outcome on the booking ticket, these can be found in ‘Your Orders’ at the bottom of the Marketplace home screen. </p>
            <p style={{fontSize:'14px', width:'80%'}}>Tap on the ticket to see the order details and to confirm a time or to pay.</p>
            <div className="order-brand-bg" style={{height: '180px', marginBottom:'15px'}}
                onClick={()=>{setShowComponent('default')}}>
                    <p>Product name (Vendor XYZ)</p>
                    <p style={{margin:'-20px auto 30px'}}><i style={{fontSize:'13px'}}>87 Kensington Gardens</i></p>
                    <div style={{height:'5px', backgroundColor:'#E6C3E0', borderRadius:'5px'}}></div>
                    <div style={{width:'280px', margin:'-30px auto 0', display:'grid', gridTemplateColumns:'repeat(4,60px)',gridGap:'10px'}}>
                            <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                            <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
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
                                <p style={{fontSize:'12px', marginTop:'-15px'}}>07/03/2021</p>
                            </div>
                            <p style={{fontSize:'14px'}}>Payment</p>
                            <p style={{fontSize:'14px'}}>Finished</p>
                    </div>
                    </div>
            <div style={{margin:'40px auto 30px',position:'absolute', right:'10px', background:'#D00648', width:'150px',
                    textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}
                    >YOUR ORDERS</div>
        </div>
    );
};

export default OrderReScheduleHelper;