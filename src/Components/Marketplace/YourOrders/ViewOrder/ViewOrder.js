import React from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import './ViewOrder.css';
import star from './star.png';
const ViewOrder = (props) => {
    const{setShowDefaultView, setShowComponent} = props;
    return (
        <div className="view-order-wrapper">
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='default'></BackAndQuestion>
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
                <p style={{fontSize:'15px'}}>Order ID:</p>
                <p style={{fontSize:'15px'}}>Omnihouse Ltd 1, Mayfair Plc <br /> WIJ 8AJ</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{fontSize:'15px'}}>Property:</p>
                <p style={{fontSize:'15px'}}>First Line of address</p>
            </div>
            <p style={{margin:'20px auto 25px'}}>Rate the service</p>
            <div style={{width:'90%',margin:'-15px auto 0', display:'grid', gridTemplateColumns:'repeat(5,1fr)', gridGap:'5px'}}>
                <img src={star} style={{width:'100%'}} alt="" />
                <img src={star} style={{width:'100%'}} alt="" />
                <img src={star} style={{width:'100%'}} alt="" />
                <img src={star} style={{width:'100%'}} alt="" />
                <img src={star} style={{width:'100%'}} alt="" />
            </div>
            <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gridGap:'5px'}}>
                <div style={{border:"1px solid #A34392", padding:'5px 10px', borderRadius:'30px', textAlign:'center'}}>POOR COMMUNICATION</div>
                <div style={{border:"1px solid #A34392", padding:'5px 10px', borderRadius:'30px', textAlign:'center'}}>WAS LATE</div>
            </div>
            <div style={{border:"1px solid #A34392", padding:'5px 10px', borderRadius:'30px', textAlign:'center', width:'100px', marginTop:'10px'}}>OTHER</div>
            <p style={{textAlign:'center',marginTop:'40px'}}>BUY AGAIN</p>
            <p style={{textAlign:'center',}}>VIEW INVOICE</p>
        </div>
    );
};

export default ViewOrder;