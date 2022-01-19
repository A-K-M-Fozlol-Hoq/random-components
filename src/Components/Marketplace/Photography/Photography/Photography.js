import React,{useState} from 'react';
import './Photography.css';
import PhotographyDefaultView from '../PhotographyDefaultView/PhotographyDefaultView'
import PhotographySummary from '../PhotographySummary/PhotographySummary';
const Photography = (props) => {
    const {showComponent, setShowComponent, setShowDefaultView}= props;
    const [ selectedPack, setSelectedPack] = useState('')
    return (
        <div className="photography-compo-wrapper">
            {
                showComponent==='default'?
                <PhotographyDefaultView selectedPack={selectedPack} setSelectedPack={setSelectedPack} setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></PhotographyDefaultView>
                :
                <PhotographySummary selectedPack={selectedPack} setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent} showComponent={showComponent}></PhotographySummary>
            }
        </div>
    );
};

export default Photography;