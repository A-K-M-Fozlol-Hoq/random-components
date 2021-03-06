import React,{useState} from 'react';
import {BiChevronDown,BiChevronUp, BiCheck} from 'react-icons/bi';
const ThreeDScans = (props) => {
    const { setSelectedPack, selectedPack } = props;
    const [clicked, setClicked] = useState(true)
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
                            {
                                selectedPack === "omniHouse-1"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('omniHouse-1')}>??100</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('omniHouse-1')}>??100</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "rentProfile-1"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('rentProfile-1')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('rentProfile-1')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "veriCheck-1"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                    onClick={()=>setSelectedPack('veriCheck-1')}>??105</div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                    onClick={()=>setSelectedPack('veriCheck-1')}>??105</div>
                                </>
                            }
                        </div>
                        <div style={{fontSize:'10px', textAlign:'center', margin:'8px auto'}}>3 Rooms</div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            {
                                selectedPack === "omniHouse-2"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('omniHouse-2')}>??110</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('omniHouse-2')}>??110</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "rentProfile-2"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('rentProfile-2')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('rentProfile-2')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "veriCheck-2"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                    onClick={()=>setSelectedPack('veriCheck-2')}>??110</div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                    onClick={()=>setSelectedPack('veriCheck-2')}>??110</div>
                                </>
                            }
                        </div>
                        <div style={{fontSize:'10px', textAlign:'center', margin:'8px auto'}}>4 Rooms</div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gridGap:'5px', marginTop:'10px'}}>
                            {
                                selectedPack === "omniHouse-3"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('omniHouse-3')}>??120</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('omniHouse-3')}>??120</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "rentProfile-3"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                        onClick={()=>setSelectedPack('rentProfile-3')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                        onClick={()=>setSelectedPack('rentProfile-3')}>??11.99</div>
                                    <div style={{width:'1px', backgroundColor:'#5C4B58',height:'20px', marginTop:'2px'}}></div>
                                </>
                            }
                            {
                                selectedPack === "veriCheck-3"?
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px',backgroundColor:'#D41553', borderRadius:'5px'}}
                                    onClick={()=>setSelectedPack('veriCheck-3')}>??120</div>
                                </>
                                :
                                <>
                                    <div style={{textAlign:'center', fontSize:'15px'}}
                                    onClick={()=>setSelectedPack('veriCheck-3')}>??120</div>
                                </>
                            }
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