import React,{useState} from "react";
import './SecondarySideBar.css'
import {BsPlus} from 'react-icons/bs'
import plusIcon from '../../../../assets/PLUS.svg';
import dotIcon from '../../../../assets/DOTd.svg';
const SecondarySideBar = (props) => {
  const { showComponent, setShowComponent, setShowDefaultView } = props;
  const [selectedTab, setSelectedTab] = useState('zero')
  return (
    <div className="marketplace-secondary-menu-wrapper">
      <h4 style={{margin:'-10px 0 20px 50px'}}>Marketplace</h4>
      <div
        className={`d-flex ${selectedTab === "zero" ? "active" : ""}`}
        onClick={() => {
          setShowComponent("default");
          setShowDefaultView("default");
          setSelectedTab('zero')
        }}
      >
        <div style={{ marginLeft:'22px', marginRight:'5px'}}>
            <img src={plusIcon} alt="" />
        </div>
        <p>Initiate new order</p>
        {
            selectedTab === "zero" &&
            <img style={{position: "absolute",right: "20px", top:'20px'}} src={dotIcon} alt="" /> 
        }
      </div>
      <div
        className={`d-flex ${selectedTab === "one" ? "active" : ""}`}
        onClick={() => {
          setShowComponent("default");
          setShowDefaultView("yourOrders");
          setSelectedTab('one')
        }}
      >
        <div className="circle" style={{ backgroundColor: "#D78F24" }}></div>
        <p>Orders in progress</p>
        {
            selectedTab === "one" &&
            <img style={{position: "absolute",right: "20px", top:'20px'}} src={dotIcon} alt="" /> 
        }
      </div>
      <div
        className={`d-flex ${selectedTab === "two" ? "active" : ""}`}
        onClick={() => {
          setShowComponent("default");
          setShowDefaultView("yourOrders");
          setSelectedTab('two')
        }}
      >
        <div className="circle" style={{ backgroundColor: "#AE3F9B" }}></div>
        <p>Completed orders</p>
        {
            selectedTab === "two" &&
            <img style={{position: "absolute",right: "20px", top:'20px'}} src={dotIcon} alt="" /> 
        }
      </div>
      <div
        className={`d-flex ${selectedTab === "three" ? "active" : ""}`}
        onClick={() => {
          setShowComponent("default");
          setShowDefaultView("marketRefCheck");
          setSelectedTab('three')
        }}
      >
        <div className="circle" style={{ backgroundColor: "#51B64F" }}></div>
        <p>Reference Check</p>
        {
            selectedTab === "three" &&
            <img style={{position: "absolute",right: "20px", top:'20px'}} src={dotIcon} alt="" /> 
        }
      </div>
    </div>
  );
};

export default SecondarySideBar;
