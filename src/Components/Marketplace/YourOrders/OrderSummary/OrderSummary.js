import React from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import './OrderSummary.css';
import star from './star.png';
import confirm from './confirm.png';
const OrderSummary = (props) => {
    const{setShowDefaultView, setShowComponent} = props;
    return (
        <div className="order-summary-wrapper">
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
                <p style={{fontSize:'15px'}}>Order Address:</p>
                <p style={{fontSize:'15px'}}>Omnihouse Ltd 1, Mayfair Plc <br /> WIJ 8AJ</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', marginBottom:'30px'}}>
                <p style={{fontSize:'15px'}}>Property:</p>
                <p style={{fontSize:'15px'}}>First Line of address</p>
            </div>
            <div style={{height:'5px', backgroundColor:'#483845', borderRadius:'5px'}}></div>
            <div style={{width:'280px', margin:'-30px auto 0', display:'grid', gridTemplateColumns:'repeat(4,60px)',gridGap:'10px'}}>
                    <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                    <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                    <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                    <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
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
                    <div>
                        <p style={{fontSize:'14px'}}>Requested</p>
                        <p style={{fontSize:'12px', marginTop:'-15px'}}>08/03/2021</p>
                    </div>
                    <div>
                        <p style={{fontSize:'14px'}}>Requested</p>
                        <p style={{fontSize:'12px', marginTop:'-15px'}}>08/03/2021</p>
                    </div>
            </div>
            <p style={{margin:'20px auto 25px'}}>Rate the service</p>
            <div style={{width:'90%',margin:'-15px auto 20px', display:'grid', gridTemplateColumns:'repeat(5,1fr)', gridGap:'5px'}}>
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

export default OrderSummary;