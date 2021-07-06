import React from 'react';
import './AdminSidebar.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
const CheckoutSidebar = () => {
    return (
        <div className="checkout-sidebar shadow"
        >
            <div className="checkout-sidebar-header d-flex align-items-center justify-content-between"
            >
                <div className="close-btn">
                    <i class="fal fa-times"></i>
                </div>
            </div>
            <div className="checkout-sidebar-main h-100">

                <Scrollbars>
                    <ul>
                        <li>
                            <Link to="/"><i class="fas fa-th-large"></i> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fad fa-shopping-bag"></i> Products</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fas fa-server"></i> Order</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fas fa-cut"></i> Coupons</Link>
                        </li>
                    </ul>
                </Scrollbars>
            </div>
            <div className="checkout-sidebar-bottom">
                <div className="btn logout-btn d-flex align-items-center">
                    <i className="fal fa-sign-out-alt logout-icon"></i>
                    <p className="my-0">Logout</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSidebar;