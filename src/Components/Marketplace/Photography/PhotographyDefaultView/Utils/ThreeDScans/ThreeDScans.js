import React,{useState} from 'react';
import {BiChevronDown,BiChevronUp, BiCheck} from 'react-icons/bi';
const ThreeDScans = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div style={{margin:'15px 0'}}>
            {
                clicked?
                <div>
                    <div style={{textAlign:'center',padding:'5px', borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
                        backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                        onClick={() =>{setClicked(false)}}>
                        <span>ThreeDScans</span>
                        <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronUp/></span>
                    </div>
                    <div style={{textAlign:'center',padding:'5px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px',
                        backgroundColor:'#3B363B', }}>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{textAlign:'center', fontSize:'15px'}}>Omnihouse</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>Rentprofile</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>Veri-Check</div>
                        </div>
                        <div style={{fontSize:'10px', textAlign:'center', margin:'8px auto'}}>2 Rooms</div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£100</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£11.99</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£105</div>
                        </div>
                        <div style={{fontSize:'10px', textAlign:'center', margin:'8px auto'}}>3 Rooms</div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£110</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£11.99</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£110</div>
                        </div>
                        <div style={{fontSize:'10px', textAlign:'center', margin:'8px auto'}}>4 Rooms</div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£120</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£11.99</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>£120</div>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            <div style={{textAlign:'center', fontSize:'15px'}}>BOOK</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>BOOK</div>
                            <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                            <div style={{textAlign:'center', fontSize:'15px'}}>BOOK</div>
                        </div>
                    </div>
                </div>
                :
                <div style={{textAlign:'center',padding:'5px', borderRadius:'5px', backgroundColor:'#5C4B58', display:'grid', gridTemplateColumns:'1fr 20px'}}
                    onClick={() =>{setClicked(true)}}>
                    <span>ThreeDScans</span>
                    <span style={{fontSize:'20px', marginTop:'-5px'}}><BiChevronDown/></span>
                </div>
            }
        </div>
    );
};

export default ThreeDScans;