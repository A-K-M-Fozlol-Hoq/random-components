import React from 'react';
import './MyProperties.css';
import { MdOutlineNavigateNext } from "react-icons/md";
import MarketPlaceCalendarInput from '../../utils/MarketPlaceCalendarInput/MarketPlaceCalendarInput';
const MyProperties = (props) => {
    const {setShowDefaultView}= props;
    return (
        <div className="my-properties-view-wrapper">
            <div style={{position: 'absolute', right:'15px',marginTop: '20px'
            }} onClick={()=>{setShowDefaultView('default')}}
            >CLOSE <span style={{fontWeight: '500', marginLeft:'10px'}}>X</span></div>
            <p style={{marginTop: '100px', fontSize:'19px', lineHeight:'22px'}}
                >Select the expirey date of the certificate so we can remind you before it expires</p>
            <MarketPlaceCalendarInput></MarketPlaceCalendarInput>
            <div style={{position: 'absolute', right:'15px',marginTop: '45px'
            }}>Next <span style={{fontSize:'20px'}}><MdOutlineNavigateNext/></span> </div>
        </div>
    );
};

export default MyProperties;