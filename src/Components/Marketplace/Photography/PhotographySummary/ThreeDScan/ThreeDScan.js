import React,{useState} from 'react';
import {BiChevronDown,BiChevronUp, BiCheck} from 'react-icons/bi';
import ignore from '../images/ignore.png';
import select from '../images/select.png';
const ThreeDScan = (props) => {
    const {setCost, setShowTotal} = props;
    const [clicked, setClicked] = useState(true)
    const [selectedScan, setSelectedScan]=useState('two')
    return (
        <div style={{margin:'15px 0'}}>
            {
                clicked?
                <div>
                    <div style={{textAlign:'center',padding:'5px', borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
                        backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                        onClick={() =>{setClicked(false)}}>
                        <span>ThreeDScan</span>
                        <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronUp/></span>
                    </div>
                    <div style={{textAlign:'center',padding:'5px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px',
                        backgroundColor:'#3B363B', }}>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 20px', gridGap:'5px', marginTop:'10px'}}
                            onClick={() =>{setCost(100); setSelectedScan('one'); setShowTotal(true)}}>
                            <div style={{fontSize:'15px'}}>2 Rooms</div>
                            <div style={{fontSize:'15px'}}>£100</div>
                            {
                                 selectedScan ==="one"?
                                 <img style={{width:'100%'}} src={select} alt="" />
                                 :
                                 <img style={{width:'100%'}} src={ignore} alt="" />
                            }
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 20px', gridGap:'5px', marginTop:'10px'}}
                            onClick={() =>{setCost(105); setSelectedScan('two'); setShowTotal(true)}}>
                            <div style={{fontSize:'15px'}}>3 Rooms</div>
                            <div style={{fontSize:'15px'}}>£105</div>
                            {
                                 selectedScan ==="two"?
                                 <img style={{width:'100%'}} src={select} alt="" />
                                 :
                                 <img style={{width:'100%'}} src={ignore} alt="" />
                            }
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 20px', gridGap:'5px', marginTop:'10px'}}
                            onClick={() =>{setCost(110); setSelectedScan('three'); setShowTotal(true)}}>
                            <div style={{fontSize:'15px'}}>4 Rooms</div>
                            <div style={{fontSize:'15px'}}>£110</div>
                            {
                                 selectedScan ==="three"?
                                 <img style={{width:'100%'}} src={select} alt="" />
                                 :
                                 <img style={{width:'100%'}} src={ignore} alt="" />
                            }
                        </div>
                    </div>
                </div>
                :
                <div style={{textAlign:'center',padding:'5px', borderRadius:'5px', backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                    onClick={() =>{setClicked(true)}}>
                    <span>ThreeDScan</span>
                    <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronDown/></span>
                </div>
            }
        </div>
    );
};
export default ThreeDScan;