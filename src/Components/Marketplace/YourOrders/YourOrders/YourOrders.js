import React, { useEffect } from 'react';
import AcceptOrder from '../AcceptOrder/AcceptOrder';
import MaintenanceTicket from '../MaintenanceTicket/MaintenanceTicket';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderReSchedule from '../OrderReSchedule/OrderReSchedule';
import ViewOrder from '../ViewOrder/ViewOrder';
import YourOrdersDefaultView from '../YourOrdersDefaultView/YourOrdersDefaultView';
import './YourOrders.css';
const YourOrders = (props) => {
    const {showComponent, setShowComponent, setShowDefaultView}= props;
    useEffect(() => {
        setShowComponent('default');
    },[])
    
    return (
        <div>
            {
                showComponent=== 'default'?
                <YourOrdersDefaultView setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></YourOrdersDefaultView>
            :
            <>
            {
                showComponent === 'orderDetails'?
                <OrderDetails setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></OrderDetails>
                :
                <>
                {
                    showComponent === 'maintenanceTicket'?
                    <MaintenanceTicket setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></MaintenanceTicket>
                    :
                    <>
                    {
                        showComponent === 'acceptOrder'?
                        <AcceptOrder setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></AcceptOrder>
                        :
                        <>
                        {
                            showComponent === 'orderReSchedule'?
                            <OrderReSchedule setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></OrderReSchedule>
                            :
                            <>
                            {
                                showComponent === 'viewOrder'?
                                <ViewOrder setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></ViewOrder>
                                :
                                <>
                                {
                                    showComponent === 'orderSummary'?
                                    <OrderSummary setShowDefaultView={setShowDefaultView} setShowComponent={setShowComponent}></OrderSummary>
                                    :
                                    <div></div>
                                }
                                </>
                            }
                            </>
                        }
                        </>
                    }
                    </>
                }
                </>
            }
            </>
            }
            

        </div>
    );
};

export default YourOrders;
// MaintenanceTicket