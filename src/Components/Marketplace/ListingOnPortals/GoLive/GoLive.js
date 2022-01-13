import React from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import logo3 from './images/logo3.png';
import logo2 from './images/logo2.png';
import logo from './images/logo.png';
import pay from './images/pay.png';
import gem from './images/gem.png';
import './GoLive.css';

const GoLive = (props) => {
    const {setShowDefaultView, setShowComponent}= props;
    return (
        <div className="go-live-compo-wrapper">
            <div style={{margin:'20px auto 60px'}}>
            <BackAndQuestion setShowDefaultView={setShowDefaultView} value='default'></BackAndQuestion>
            </div>
            <p style={{fontSize:'18px'}}>Advertise property on popular portals for 15 days.</p>
            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 100px', gridGap:'10px'}}>
                <img style={{width:'100%'}} src={logo3} alt="" />
                <img style={{width:'100%'}} src={logo2} alt="" />
                <img style={{width:'100%', marginTop:'-10px'}} src={logo} alt="" />
            </div>
            <div style={{width:'200px', margin:'30px auto 0', display:'grid', gridTemplateColumns:"55px 1fr 55px",
                        gridGap:'15px', marginTop:'5px'}}>
                        <p style={{fontSize:'14px', marginTop:'4px'}}>Not Now</p>
                        <div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <p style={{fontSize:'14px', marginTop:'4px'}}>Go Live</p>
                    </div>
            <p style={{textAlign: 'center', fontSize:'13px', margin:'10px auto 30px'}}
                onClick={() =>setShowComponent('myProperties') }
                > <i style={{color:'#51B64F'}}>Schedule a “Go Live” date</i> </p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 30px 1fr', width:'240px', margin:'0 auto 0', gridGap:'10px'}}>
                <div className='par-or-gem-div' style={{backgroundColor:'#4E444C'}}> 
                    <img style={{width:'70px', margin:'-10px 0 0 1px'}} src={pay} alt="" />
                    <p style={{fontSize:'12px', textAlign:'center', marginTop:'15px', marginBottom:'5px'}}>Pay £9.99</p>
                </div>
                <p style={{fontSize:'13px', marginTop:'30px', textAlign:'center'}}>OR</p>
                <div className='par-or-gem-div' style={{backgroundColor:'#93227F'}}>
                    <img style={{width:'30px', margin:'2px 0 0 20px'}} src={gem} alt="" />
                    <p style={{fontSize:'14px', textAlign:'center', marginTop:'7px', marginBottom:'5px'}}>1 Gem</p>
                </div>
            </div>
            <div style={{margin:'80px auto 30px',position:'absolute', right:'10px', background:'#93227F', width:'100px',
            textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}>Next</div>
        </div>
    );
};

export default GoLive;