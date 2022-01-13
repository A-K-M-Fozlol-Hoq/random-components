import React from 'react';
import help from './help.png';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const BackAndQuestion = (props) => {
    const {setShowDefaultView, value}= props;
    return (
        <div style={{display: 'grid', gridTemplateColumns:'1fr 25px'}}>
            {
                console.log(setShowDefaultView,value)
            }
            <p onClick={() =>setShowDefaultView(value)}><span><MdOutlineArrowBackIosNew/></span> Back</p>
            <img style={{width: '100%', marginTop: '2px'}} src={help} alt="" />
        </div>
    );
};

export default BackAndQuestion;