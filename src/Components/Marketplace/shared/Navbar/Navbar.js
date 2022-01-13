import React from 'react';
import logOut from '../images/logOut.png';
import question from '../images/question.png';
const Navbar = () => {
    return (
        <div style={{backgroundColor: '#211F21', height: '7vh'}}>
            <div style={{float: 'right'}}>
                <img style={{width:'40px', marginTop: '5px', marginRight:'5px'}} src={logOut} alt="" />
                <img style={{width:'40px', marginTop: '5px', marginRight:'15px'}} src={question} alt="" />
            </div>
        </div>
    );
};

export default Navbar;