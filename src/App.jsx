import React, { useRef, useEffect } from 'react';

import './css/styles.css';
import './css/normalice.css';

import Hero from './components/Hero';
import SeasonalShowcase from './components/SeasonalShowcase/SeasonalShowcase';
import Lavanda from './components/Lavanda/Lavanda';
import Caramel from './components/Caramel/Caramel';

import Banner from './components/Banner/Banner';
import RewardsBanner from './components/RewardsBanner/RewardsBanner';
import PromoHighlights from './components/PromoHighlights/PromoHighlights';
import { ViewportProvider } from './context/ViewportContext';
import MainLayout from './layout/MainLayout';

const App = () => {
    const nav = useRef(null);
    const containerNav = useRef(null);
    const btnCheckBox = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!containerNav.current.contains(e.target)) {
                nav.current.classList.remove('nav--active');
                // if (checkboxRef.current) {
                btnCheckBox.current.checked = false;
                // }
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCheckboxChange = (e) => {
        nav.current.classList.toggle('nav--active');
    };

    return (
        <ViewportProvider>
            <MainLayout 
                handleCheckboxChange={handleCheckboxChange}
                navRef = {nav}
                containerNavRef = {containerNav}
                btnCheckBoxRef = {btnCheckBox}
            >
                <Hero />
                <SeasonalShowcase />
                <Lavanda />
                <Caramel />
                <RewardsBanner />
                <Banner />
                <PromoHighlights />
            </MainLayout>
        </ViewportProvider>
    )
}
/*

*/
export default App
