import React from 'react';
import './PhotographyDefaultView.css';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import BackAndQuestion from '../../utils/BackAndQuestion/BackAndQuestion'
import Photography from './Utils/Photography/Photography';
import ThreeDScans from './Utils/ThreeDScans/ThreeDScans';
import Floorplans from './Utils/Floorplans/Floorplans';
const PhotographyDefaultView = (props) => {
    const {setShowDefaultView, setShowComponent, setSelectedPack, selectedPack}= props;
    return (
        <div className='photography-default-view-wrapper'>
            <div style={{marginTop: '20px'}}>
                <BackAndQuestion setShowDefaultView={setShowDefaultView} value='default'></BackAndQuestion>
            </div>
            <h3>Photography, 3D Scans and Floorplans</h3>
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
            <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px',margin:'10px auto 20px'}}>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary');setSelectedPack('omniHouse')}}>BOOK</div>
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'28px', marginTop:'2px'}}></div>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary');setSelectedPack('rentProfile')}}>BOOK</div>
                <div style={{width:'1px', backgroundColor:'#5C4B58',height:'28px', marginTop:'2px'}}></div>
                <div style={{borderRadius:'30px', padding:'5px 10px', textAlign:'center',backgroundColor:'#D41553'}}
                onClick={() =>{setShowComponent('summary');setSelectedPack('veriCheck')}}>BOOK</div>
            </div>
            <Photography></Photography>
            <ThreeDScans setSelectedPack={setSelectedPack} selectedPack={selectedPack}></ThreeDScans>
            <Floorplans></Floorplans>
        </div>
    );
};

export default PhotographyDefaultView;