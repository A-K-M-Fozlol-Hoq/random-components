import React, { useEffect } from 'react';
import MyProperties from '../MyProperties/MyProperties';
import GoLive from '../GoLive/GoLive';
import './ListingOnPortals.css';
const ListingOnPortals = (props) => {
    const {showComponent, setShowComponent, setShowDefaultView}= props;
    useEffect(() => {
        setShowComponent('default');
    },[])
    return (
        <div>
            {
                showComponent=== 'default'?
                <GoLive setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></GoLive>
            :
            <div>
                {
                    showComponent === 'myProperties'?
                    <MyProperties setShowDefaultView={setShowDefaultView} ></MyProperties>
                    :
                    <div></div>
                }
            </div>
            }
            

        </div>
    );
};
export default ListingOnPortals;