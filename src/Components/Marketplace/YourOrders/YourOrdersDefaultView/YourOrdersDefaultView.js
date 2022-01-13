import React, { useState } from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import confirm from './image/confirm.png';
import finish from './image/finish.png';
import pay from './image/pay.png';
import question from './image/question.png';
import './YourOrdersDefaultView.css';

const YourOrdersDefaultView = (props) => {
    const {setShowDefaultView, setShowComponent}= props;
    return (
        <div>
            <div className="your-orders-default-view-compo-wrapper" style={{height: '1000px'}}>
                    <div style={{marginTop: '20px'}}>
                        <BackAndQuestion setShowDefaultView={setShowDefaultView} value='default'></BackAndQuestion>
                        <h3 style={{margin:'10px auto'}}>Orders</h3>
                    </div>
                    <div className="order-brand-bg" style={{height: '54px', marginBottom:'15px'}}>
                        <div style={{position:'absolute', right:'10px', background:'#93227F', width:'130px',
                        textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}>SELECT LEAD</div>
                    </div>
                    <div className="order-brand-bg" style={{height: '54px', marginBottom:'15px'}}>
                        <div>
                            <p style={{fontSize: '12px', marginBottom:'-3px', marginTop: '-5px'}}>Speedy check</p>
                            <p style={{fontSize: '12px', marginBottom:'-3px'}}>Vendor XYZ</p>
                            <p style={{fontSize: '10px', }}><i>Purchased: DD/MM/YYYY</i></p>
                        </div>
                        <div style={{position:'absolute', right:'10px', background:'#93227F', width:'130px',
                        textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700', marginTop:'-55px'}}>SELECT LEAD</div>
                    </div>
                    <div className="order-brand-bg" style={{height: '180px', marginBottom:'15px'}}>
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
                    <div className="order-brand-bg" style={{height: '180px'}}>
                    <p>Product name (Vendor XYZ)</p>
                    <p style={{margin:'-20px auto 30px'}}><i style={{fontSize:'13px'}}>Property first line</i></p>
                    <div style={{height:'5px', backgroundColor:'#E6C3E0', borderRadius:'5px'}}></div>
                    <div style={{width:'280px', margin:'-30px auto 0', display:'grid', gridTemplateColumns:'repeat(4,60px)',gridGap:'10px'}}>
                            <img src={confirm} style={{width:'100%',height:'53px'}} alt="" />
                            <img onClick={()=>{setShowComponent('orderDetails')}} src={question} style={{width:'40px',height:'40px', marginTop:'10px', marginLeft:'10px'}} alt="" />
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
                    </div>
                    <h3 style={{margin:'10px auto'}}>Completed orders</h3>
                    <div className="order-brand-bg" style={{height: '54px', marginBottom:'15px'}}>
                        <div style={{position:'absolute', right:'10px', border:'1px solid #93227F', width:'100px',
                        textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}
                        onClick={() =>setShowComponent('viewOrder')}>View</div>
                    </div>
                    <div className="order-brand-bg" style={{height: '180px', marginBottom:'15px'}}
                        onClick={() =>setShowComponent('orderSummary')}>
                        <p>Product name (Vendor XYZ)</p>
                        <p style={{margin:'-20px auto 30px'}}><i style={{fontSize:'13px'}}>87 Kensington Gardens</i></p>
                        <div style={{height:'5px', backgroundColor:'#E6C3E0', borderRadius:'5px'}}></div>
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
                    </div>
                </div>
        </div>
    );
};

export default YourOrdersDefaultView;