import React,{useState} from 'react';
import MarketPlaceReferenceChecksDefault from '../MarketPlaceReferenceChecksDefault/MarketPlaceReferenceChecksDefault';
import './MarketPlaceReferenceChecks.css';
import MarketPlaceReferenceChecksSummary from '../MarketPlaceReferenceChecksSummary/MarketPlaceReferenceChecksSummary';
const MarketPlaceReferenceChecks = (props) => {
    const {showComponent, setShowComponent, setShowDefaultView}= props;
    const [ selectedCheck, setSelectedCheck] = useState('')
    return (
        <div className="market-reference-check-wrapper">
            {
                showComponent==='default'?
                <MarketPlaceReferenceChecksDefault setSelectedCheck={setSelectedCheck} setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></MarketPlaceReferenceChecksDefault>
                :
                <MarketPlaceReferenceChecksSummary selectedCheck={selectedCheck} setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></MarketPlaceReferenceChecksSummary>

            }
        </div>
    );
};
// 
export default MarketPlaceReferenceChecks;