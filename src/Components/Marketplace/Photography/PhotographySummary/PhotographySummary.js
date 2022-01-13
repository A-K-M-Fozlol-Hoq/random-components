import React from 'react';
import './PhotographySummary.css'
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import logo from './images/logo.png';
import del from './images/del.png';
import Photography from '../PhotographyDefaultView/Utils/Photography/Photography'
import Floorplans from '../PhotographyDefaultView/Utils/Floorplans/Floorplans'
import ThreeDScan from './ThreeDScan/ThreeDScan';
const PhotographySummary = (props) => {
    // setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent} showComponent={showComponent}
    const {setShowDefaultView, setShowComponent}= props;
    return (
        <div className="photography-summary-wrapper">
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='default'></BackAndQuestion>
            </div><div style={{display: 'grid', gridTemplateColumns:'1fr 80px', marginTop:'-5px'}}>
                <div style={{fontSize: '20px', marginTop: '14px'}}>Omnihouse</div>
                <img src={logo} style={{width:'100%'}} alt="" />
            </div>
            <p>Select the services you require</p>
            <Photography></Photography>
            <ThreeDScan></ThreeDScan>
            <Floorplans></Floorplans>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 15px', gridGap:'5px', marginTop:'10px',border:'1px solid #3B363B', padding:'10px'
                , borderRadius:'10px', marginTop:'20px',}}>
                <div style={{fontSize:'15px'}}>3D Scan 3 Room</div>
                <div style={{fontSize:'15px'}}>£105 (inc VAT)</div>
                <img style={{width:'100%'}} src={del} alt="" />
            </div>
            <p style={{position:'absolute', right:'10px', fontSize:'14px', marginTop:'30px'}}>Total: <span style={{fontSize:'16px', marginLeft:'20px'}}>£105 (inc VAT)</span></p>
            <div style={{margin:'120px auto 30px',position:'absolute', right:'10px', background:'#D00648', width:'100px',
            textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}
            onClick={() =>{setShowComponent('orderReSchedule'); setShowDefaultView('yourOrders') }}>BOOK</div>
        </div>
    );
};

export default PhotographySummary;