import React from 'react';
// import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import './MarketplaceDefaultView.css';
import help from './help.png';
const MarketplaceDefaultView = (props) => {
    const {setShowDefaultView}=props;
    return (
        <div>
                <div className='market-default-view-wrapper'>
                    <div style={{marginTop: '20px'}}>
                        {/* <BackAndQuestion setShowDefaultView={setShowDefaultView} value='default'></BackAndQuestion> */}
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns:'1fr 25px'}}>
                        <h3 style={{margin:'10px 0 20px 10px'}}>Marketplace</h3>
                        <img style={{width: '100%', marginTop: '15px'}} src={help} alt="" />
                    </div>
                    
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gridGap:'15px', padding:'10px'}}>
                        <div className="marketplace-options" style={{backgroundColor:'#D4E09B'}}
                            onClick={()=>{setShowDefaultView('goLive')}}>
                            <div className="p-bottom">Listing <br />on portals</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#B19ACE'}}
                            onClick={()=>{setShowDefaultView('marketRefCheck')}}>
                            <div className="p-bottom">Reference <br />checks</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#BD8B8B'}}
                            onClick={()=>{setShowDefaultView('photography')}}>
                            <div className="p-bottom">Photography, 3D Scans and FloorPlans</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#D58A1B'}}>
                            <div className="p-bottom">Viewing <br />agents</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#D38C55'}}>
                            <div className="p-bottom">Inventory <br />checks</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#CA9AA5'}}>
                            <div className="p-bottom">Certificate <br /> renewal</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#D38C55'}}>
                            <div className="p-bottom">Insurance</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#2E2E2E'}}>
                            <div className="p-top">coming soon.</div>
                            <div className="p-bottom" style={{color:'#fff'}}>Cruise <br />control</div>
                        </div>
                        <div className="marketplace-options" style={{backgroundColor:'#2E2E2E'}}>
                            <div className="p-top">coming soon.</div>
                            <div className="p-bottom" style={{color:'#fff'}}>Home <br />services</div>
                        </div>
                    </div>
                    <h4 style={{margin:'30px auto 15px'}}>Offers</h4>
                    <div className='marketplace-business-div' style={{backgroundColor:'#24867A'}}>
                        <p className="marketplace-p-up">10% off all purchases.</p>
                        <p className="marketplace-p-down"><i>Offer ends midnight on  24/05/2021</i></p>
                    </div>
                    <div className='marketplace-business-div' style={{backgroundColor:'#2D602C'}}>
                        <p className="marketplace-p-up">Free Omnihouse reference check.</p>
                        <p className="marketplace-p-down"><i>Offer can be claimed whenever. </i></p>
                    </div>
                    <div className='marketplace-btn-div' style={{textAlign:'center', padding:'5px 10px', border:'1px solid #93227F', fontWeight:'700', 
                    margin:'30px auto 50px', borderRadius:'30px', cursor:'pointer'}} onClick={()=>{setShowDefaultView('yourOrders')}}>YOUR ORDERS</div>
                </div>
        </div>
    );
};

export default MarketplaceDefaultView;