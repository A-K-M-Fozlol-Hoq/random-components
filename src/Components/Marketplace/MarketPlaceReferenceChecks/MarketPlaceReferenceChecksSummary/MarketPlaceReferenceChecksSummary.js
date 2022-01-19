import React,{useState} from 'react';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion';
import ComprehensiveCheck from '../MarketPlaceReferenceChecksDefault/Utils/ComprehensiveCheck/ComprehensiveCheck';
import './MarketPlaceReferenceChecksSummary.css'
import logo from './images/logo.png';
import del from './images/del.png';
import SpeedyCheck from './SpeedyCheck/SpeedyCheck';
const MarketPlaceReferenceChecksSummary = (props) => {
    const [ showTotal, setShowTotal]= useState(true)
    const {setShowDefaultView, setShowComponent, selectedCheck}= props;
    return (
        <div className="marketplace-ref-check-wrapper" style={{paddingBottom:'200px'}}>
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowComponent} value='default'></BackAndQuestion>
            </div>
            <div style={{display: 'grid', gridTemplateColumns:'1fr 80px', marginTop:'-5px'}}>
                <div style={{fontSize: '20px', marginTop: '14px'}}>Omnihouse</div>
                <img src={logo} style={{width:'100%'}} alt="" />
            </div>
            <p>Select the services you require</p>
            <ComprehensiveCheck></ComprehensiveCheck>
            <SpeedyCheck></SpeedyCheck>
            {
                showTotal &&
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 15px', gridGap:'5px', marginTop:'10px',border:'1px solid #3B363B', padding:'10px'
                    , borderRadius:'10px', marginTop:'20px',}}>
                    <div style={{fontSize:'15px'}}>Speedy check</div>
                    {
                        selectedCheck === 'omniHouse'?
                        <div style={{fontSize:'15px'}}>£1.99 (inc VAT)</div>
                        :
                            selectedCheck==='rentProfile'?
                            <div style={{fontSize:'15px'}}>£11.99 (inc VAT)</div>
                            :
                            <div style={{fontSize:'15px'}}>£11.99 (inc VAT)</div>
                    }
                    
                    <img onClick={()=>setShowTotal(false)} style={{width:'100%'}} src={del} alt="" />
                </div>
            }
            
            {
                showTotal &&
                <div>
                    {
                    selectedCheck === 'omniHouse'?
                    <p style={{position:'absolute', right:'10px', fontSize:'14px', marginTop:'30px'}}
                     >Total: <span style={{fontSize:'16px', marginLeft:'20px'}}>£1.99 (inc VAT)</span></p>
                    :
                        selectedCheck==='rentProfile'?
                        <p style={{position:'absolute', right:'10px', fontSize:'14px', marginTop:'30px'}}
                        >Total: <span style={{fontSize:'16px', marginLeft:'20px'}}>£11.99 (inc VAT)</span></p>
                        :
                        <p style={{position:'absolute', right:'10px', fontSize:'14px', marginTop:'30px'}}
                        >Total: <span style={{fontSize:'16px', marginLeft:'20px'}}>£11.99 (inc VAT)</span></p>
                }
                </div>
                
            }
            <div style={{margin:'120px auto 30px',position:'absolute', right:'10px', background:'#D00648', width:'100px',
            textAlign:'center', padding:'5px 10px', borderRadius:'30px', fontWeight:'700'}}>BOOK</div>
        </div>
    );
};

export default MarketPlaceReferenceChecksSummary;