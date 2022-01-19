import React, { useState, useEffect } from 'react';
// import ListingOnPortals from '../../ListingOnPortals/ListingOnPortals/ListingOnPortals';
import MarketplaceDefaultView from '../MarketplaceDefaultView/MarketplaceDefaultView';
import MarketPlaceReferenceChecks from '../../MarketPlaceReferenceChecks/MarketPlaceReferenceChecks/MarketPlaceReferenceChecks';
// import MyProperties from '../../ListingOnPortals/MyProperties/MyProperties';
import YourOrders from '../../YourOrders/YourOrders/YourOrders';
import ListingOnPortals from '../../ListingOnPortals/ListingOnPortals/ListingOnPortals';
import Photography from '../../Photography/Photography/Photography';
import SideBar from '../../shared/SideBar/SideBar';
import SecondarySideBar from '../../shared/SecondarySideBar/SecondarySideBar';
import Navbar from '../../shared/Navbar/Navbar';
// import store from '../../../../redux/store';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { makeNoParamGetCall } from "../../../../utils/utils";

const Marketplace = () => {
    const [showDefaultView, setShowDefaultView] = useState('default')
    const [showComponent, setShowComponent]= useState('default')
    const [ isLoggedIn  , setIsLoggedIn] = useState(true)
    // const history = useHistory();
    useEffect(() =>{
        // if(store.getState().user?.currentUser) {
        // if(store.store.getState().user?.currentUser) {
        //     setIsLoggedIn(true)
        // } else {
        //     setIsLoggedIn(false)
        //     history.push("/login")
        // }
    },[])

    return (
        <div>
            {
                isLoggedIn &&
                <div className="marketplace-page-wrapper" style={{display:'grid', gridTemplateColumns:'100px 1fr'}}>
                    <div>
                        <SideBar></SideBar>
                    </div>
                    <div>
                        <div>
                            <Navbar></Navbar>
                        </div>
                        <div style={{display:'grid', gridTemplateColumns:'350px 1fr'}}>
                            <div style={{backgroundColor:'#201B20'}}>
                                <SecondarySideBar showComponent={showComponent} setShowComponent={setShowComponent}
                                    setShowDefaultView={setShowDefaultView}></SecondarySideBar>
                            </div>
                            <div style={{height: '93vh', overflowY: 'scroll'}}>
                            {
                                showDefaultView === 'default'?
                                <MarketplaceDefaultView setShowDefaultView={setShowDefaultView}></MarketplaceDefaultView>
                                // <MarketPlaceReferenceChecks setShowDefaultView={setShowDefaultView}></MarketPlaceReferenceChecks>
                                // <GoLive></GoLive>
                                // <MyProperties></MyProperties>
                                :
                                <div>
                                    {
                                    showDefaultView === 'goLive'?
                                    <ListingOnPortals showComponent={showComponent} setShowComponent={setShowComponent} setShowDefaultView={setShowDefaultView}></ListingOnPortals>
                                    :
                                    <>
                                        {
                                        showDefaultView === 'yourOrders'?
                                        <YourOrders showComponent={showComponent} setShowComponent={setShowComponent} setShowDefaultView={setShowDefaultView}></YourOrders>
                                        :
                                            <>
                                            {
                                            showDefaultView === 'marketRefCheck'?
                                            <MarketPlaceReferenceChecks showComponent={showComponent} setShowComponent={setShowComponent}
                                            setShowDefaultView={setShowDefaultView}></MarketPlaceReferenceChecks>
                                            :
                                                <>
                                                {
                                                showDefaultView === 'photography'?
                                                <Photography showComponent={showComponent} setShowComponent={setShowComponent} setShowDefaultView={setShowDefaultView}></Photography>
                                                :
                                                <></>
                                                }
                                                </>
                                            }
                                            </>
                                        }
                                    </>
                                }
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                // :
                // <div className="w-50 mt-5 p-5 mx-auto">
                //     {history.push("/login")}
                //     {/* <h1>Please Login First</h1>
                //     <Link to={'/login'} style={{textDecoration: 'none' }}>
                //         <div className="btn btn-primary"></div>
                //     </Link> */}
                // </div>
            }
        </div>
    );
};

export default Marketplace;