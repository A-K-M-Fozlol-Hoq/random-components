import React,{useState} from 'react';
import {BiChevronDown,BiChevronUp} from 'react-icons/bi';
const Photography = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div style={{margin:'15px 0'}}>
            {
                clicked?
                <div>
                    <div style={{textAlign:'center',padding:'5px', borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
                        backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                        onClick={() =>{setClicked(false)}}>
                        <span>Photography</span>
                        <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronUp/></span>
                    </div>
                </div>
                :
                <div style={{textAlign:'center',padding:'5px', borderRadius:'5px', backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                    onClick={() =>{setClicked(true)}}>
                    <span>Photography</span>
                    <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronDown/></span>
                </div>
            }
        </div>
    );
};

export default Photography;