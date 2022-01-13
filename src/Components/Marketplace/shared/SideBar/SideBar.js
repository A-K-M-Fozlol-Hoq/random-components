import React from 'react';
import face from '../images/face.svg';
import contractBuilder from '../images/contractBuilder.svg';
import Maintenance from '../images/Maintenance.svg';
import OmniCheck from '../images/OmniCheck.svg';
import OmniNews from '../images/OmniNews.svg';
import OmniScan from '../images/OmniScan.svg';
import propertyPortal from '../images/propertyPortal.svg';
import logo from '../images/logo.png';
import './SideBar.css';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className='maintenance-sidebar-wrapper' style={{backgroundColor: '#161516', margin:'auto', height:'100vh', overflow:'scroll'}}>
            <img style={{width:'60px', margin:'20px 0 20px 10px'}} src={face} alt="" />
            <div style={{backgroundColor: '#fff', height:'1px', width:'60px', margin:'0 auto 20px'}}></div>
            <div>
            <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img style={{background:'#8F39B7', padding:'10px'}} src={OmniCheck} alt="" />
                        <p className="submenu-p" >OmniCheck</p>
                    </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img  style={{background:'#717CE3', padding:'10px'}} src={OmniNews} alt="" />
                        <p className="submenu-p" >OmniNews</p>
                    </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img  style={{background:'#20C174', padding:'10px'}} src={contractBuilder} alt="" />
                        <p className="submenu-p" >Contract Builder</p>
                    </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img  style={{background:'#717CE3', padding:'10px'}} src={Maintenance} alt="" />
                        <p className="submenu-p" >Maintanance</p>
                    </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img  style={{background:'#656262', padding:'10px'}} src={OmniScan} alt="" />
                        <p className="submenu-p" >OmniScan</p>
                    </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div>
                        <img style={{background:'#8F39B7', padding:'10px'}}  src={propertyPortal} alt="" />
                        <p className="submenu-p" >Property Portal</p>
                </div>
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <div style={{marginTop:'35px'}}> 
                        <div style={{background:'#fff', height:'40px', width:'7px', borderTopRightRadius:'5px'
                        , borderBottomRightRadius:'5px', marginBottom:'-65px'}}></div>
                        <img  style={{background:'#8F39B7', padding:'10px'}}  src={propertyPortal} alt="" />
                        <p className="submenu-p" >Marketplace</p>
                    </div>
                </Link>
            </div>
            <img style={{width:'60px', margin:'20px 0 20px 10px'}} src={logo} alt="" />
        </div>
    );
};

export default SideBar;