import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import BannerSection from '../pages/bannersection/BannerSection';
import ExtraSection from '../pages/extraSection/ExtraSection';

const Main = () => {
    return (
        <div>
            <Header />
            <BannerSection />
            <Outlet />
            <ExtraSection />
            <Footer />
        </div>
    );
};

export default Main;