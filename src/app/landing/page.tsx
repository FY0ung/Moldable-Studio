"use client";

import React from 'react';
import HomeMobile from '@components/app/components/landing/mobile/NavbarMobile';
import HomeDasktop from '@components/app/components/landing/dasktop/NavbarDesktop';

const LandingPage = () => {
    
    return (
        <div className="h-screen w-screen flex sm:justify-start sm:items-start lg:justify-center lg:items-center">
            <div className="w-full h-full">
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                    <HomeMobile />
                </div>
                {/* Desktop Layout */}
                <div className="hidden sm:block">
                    <HomeDasktop />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
