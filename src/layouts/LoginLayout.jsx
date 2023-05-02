import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBarSecond from '../pages/Shared/NavigationBar/NavigationBarSecond';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBarSecond></NavigationBarSecond>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;