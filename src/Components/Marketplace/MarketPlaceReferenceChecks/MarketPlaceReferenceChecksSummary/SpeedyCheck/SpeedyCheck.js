import React,{useState} from 'react';
import {BiChevronDown,BiChevronUp, BiCheck} from 'react-icons/bi';
import select from '../images/select.png';
const SpeedyCheck = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <div style={{margin:'15px 0'}}>
            {
                clicked?
                <div>
                    <div style={{textAlign:'center',padding:'5px', borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
                        backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                        onClick={() =>{setClicked(false)}}>
                        <span>SpeedyCheck</span>
                        <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronUp/></span>
                    </div>
                    <div style={{textAlign:'center',padding:'5px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px',
                        backgroundColor:'#3B363B', }}>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 20px', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{fontSize:'15px'}}>Speedy check</div>
                            <div style={{fontSize:'15px'}}>£2.99</div>
                            <img style={{width:'100%'}} src={select} alt="" />
                        </div>
                    </div>
                </div>
                :
                <div style={{textAlign:'center',padding:'5px', borderRadius:'5px', backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                    onClick={() =>{setClicked(true)}}>
                    <span>SpeedyCheck</span>
                    <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronDown/></span>
                </div>
            }
        </div>
    );
};

export default SpeedyCheck;