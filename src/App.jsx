import React, { useRef, useEffect, Suspense } from 'react';

import './css/styles.css';
import './css/normalice.css';


import Hero from './components/Hero';
import SeasonalShowcase from './components/SeasonalShowcase/SeasonalShowcase';

const Lavanda = React.lazy(() => import('./components/Lavanda/Lavanda'));
const Caramel = React.lazy(() => import('./components/Caramel/Caramel'));
const Banner = React.lazy(() => import('./components/Banner/Banner'));
const RewardsBanner = React.lazy(() => import('./components/RewardsBanner/RewardsBanner'));
const PromoHighlights = React.lazy(() => import('./components/PromoHighlights/PromoHighlights'));

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
                navRef={nav}
                containerNavRef={containerNav}
                btnCheckBoxRef={btnCheckBox}
            >
                <Hero />
                <SeasonalShowcase />
                
                <Suspense fallback={null}>
                    <Lavanda />
                </Suspense>
                <Suspense fallback={null}>
                    <Caramel />
                </Suspense>
                <Suspense fallback={null}>
                    <RewardsBanner />
                </Suspense>
                <Suspense fallback={null}>
                    <Banner />
                </Suspense>
                <Suspense fallback={null}>
                    <PromoHighlights />
                </Suspense>
            </MainLayout>
        </ViewportProvider>
    )
}
/*

*/
export default App
