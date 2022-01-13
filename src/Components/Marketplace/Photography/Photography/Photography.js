import React,{useState} from 'react';
import './Photography.css';
import PhotographyDefaultView from '../PhotographyDefaultView/PhotographyDefaultView'
import PhotographySummary from '../PhotographySummary/PhotographySummary';
const Photography = (props) => {
    const {showComponent, setShowComponent, setShowDefaultView}= props;
    return (
        <div className="photography-compo-wrapper">
            {
                showComponent==='default'?
                <PhotographyDefaultView setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></PhotographyDefaultView>
                :
                <PhotographySummary setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent} showComponent={showComponent}></PhotographySummary>
            }
        </div>
    );
};

export default Photography;