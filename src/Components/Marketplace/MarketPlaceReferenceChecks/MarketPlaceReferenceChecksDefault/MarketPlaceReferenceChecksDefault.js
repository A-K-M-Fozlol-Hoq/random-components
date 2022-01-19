
import React from 'react';
import './MarketPlaceReferenceChecksDefault.css';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import ComprehensiveCheck from './Utils/ComprehensiveCheck/ComprehensiveCheck';
import SpeedyCheck from './Utils/SpeedyCheck/SpeedyCheck';
const MarketPlaceReferenceChecksDefault = (props) => {
    const {setShowDefaultView, setShowComponent, setSelectedCheck}= props;
    return (
        <div className="market-reference-check-default-wrapper">
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowDefaultView} value='default'></BackAndQuestion>
            </div>
            <h3>Reference checks</h3>
            <p>Vendors</p>
            {/* 5C4B58 */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'30px'}}>
                <img style={{width:'80%', margin:'-20px auto 0'}} src={logo1} alt="" />
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px'}}></div>
                <img style={{width:'100%', marginTop:'-25px'}} src={logo2} alt="" />
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px'}}></div>
                <img style={{width:'80', margin:'-23px auto 0'}} src={logo3} alt="" />
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <p style={{fontSize:'14px', textAlign:'center'}}>Omnihouse</p>
                <p style={{fontSize:'14px', textAlign:'center'}}>Rentprofile</p>
                <p style={{fontSize:'14px', textAlign:'center'}}>Veri-Check</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px',}}>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary'); setSelectedCheck('omniHouse')}}>BOOK</div>
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'28px', marginTop:'2px'}}></div>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary'); setSelectedCheck('rentProfile')}}>BOOK</div>
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'28px', marginTop:'2px'}}></div>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary');setSelectedCheck('veriCheck')}}>BOOK</div>
            </div>
            <ComprehensiveCheck></ComprehensiveCheck>
            <SpeedyCheck setSelectedCheck={setSelectedCheck} setShowComponent={setShowComponent}></SpeedyCheck>
        </div>
    );
};

export default MarketPlaceReferenceChecksDefault;