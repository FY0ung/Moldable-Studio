import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import '../../../globals.css';

const NavbarDesktop: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div>
            <div className="bg-background-paper backdrop-blur-md p-2 flex flex-row items-center justify-center fixed top-0 left-0 right-0 z-50">
                <div className="ml-[56px] mr-[56px] w-full flex flex-row justify-between">
                    <div className="py-[4px] px-[4px]">
                        <Link href="/landing" passHref>
                            <Image
                                className="w-[64px] h-[34px]"
                                src="icons/logo.png"
                                alt="Moldable Studio Logo"
                                width={64}
                                height={34}
                            /> */}
                            <Image src="/assets/images/logo.png" alt="Logo" width={100} height={100} />

                        </Link>
                    </div>
                    <div className='w-full flex flex-row justify-center items-center gap-[40px]'>
                        <button>About</button>
                        <button>Projects</button>
                        <button>Service</button>
                        <button>Contact Us </button>
                    </div>
                </div>
            </div>
            {/* Section 1 */}
            <div className='w-full mt-[56px]'>
                <div className='w-full h-[906px] flex flex-col justify-center items-center align-middle p-[80px]'>
                    <div className="relative w-full h-[819px] flex flex-col items-center justify-center">
                        {/* Background */}
                        <div
                            className="absolute inset-0 rounded-full blur-[100px] -z-10"
                            style={{
                                background: `
                                    radial-gradient(
                                        closest-side,
                                        rgba(255, 255, 255, 1) 0%,
                                        rgba(171, 194, 229, 0.9) 40.5%,
                                        rgba(203, 165, 209, 0.9) 51%,
                                        rgba(28, 28, 30, 0.9) 76%
                                    )
                                `,
                                transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`, // Adjust sensitivity
                                transition: 'transform 0.05s linear',
                            }}
                        ></div>
                        <div className='flex flex-col w-full items-center justify-center gap-[80px]'>
                            <div className='flex flex-col w-full items-center justify-center gap-[40px]'>
                                {/* Text Content */}
                                <div className="flex flex-col justify-center items-center gap-[4px] z-10">
                                    <div className="text-6xl">Design, Create and</div>
                                    <div className="text-7xl italic bg-gradient-to-b from-[rgba(142,194,204,1)] to-[rgba(211,158,220,1)] bg-clip-text text-transparent">
                                        be passionate
                                    </div>
                                </div>
                                <div className="flex text-base text-center z-10">
                                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                                    <br />
                                    Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                                </div>
                            </div>
                            <Image
                                className="w-[520px] h-[402px]"
                                src="icons/logo.png"
                                alt="Moldable Studio Logo"
                                width={520}
                                height={420}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <div className="pt-[20px] relative flex items-center justify-center w-full h-auto">
                {/* Background Image */}
                <Image
                    className="-z-10"
                    src="gradient/gradient.svg"
                    alt="bg-gradient"
                    width={1000}
                    height={1000}
                />
                {/* Content */}
                <div className='absolute w-full h-auto items-center justify-center gap-[70px]'>
                    <div className="z-10 flex flex-col w-full h-auto items-center justify-center gap-[80px]">
                        {/* Text Content */}
                        <div className="flex flex-col w-full items-center justify-center gap-[32px]">
                            <div className="text-white text-6xl text-center">All your idea in
                                <br />one place</div>
                            <div className="flex  text-white text-base text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <button className="bg-[#0c0d0d] rounded-lg border border-border-secondary-default border-solid p-3 flex flex-row gap-2 items-center justify-center relative hover:bg-[#2c2c2c]">
                                <div className=" text-white text-base text-center">More about us</div>
                            </button>
                        </div>
                        {/* Card Content */}
                        <div className="flex flex-row w-[1280px] items-center justify-center m-[80px] gap-[80px]">
                            {/* 1 */}
                            <div className="flex flex-col w-full h-auto items-center justify-center gap-[16px]">
                                <img src="icons/trophy-1.svg" className="h-[64px] w-[64px] object-contain" />
                                <div className="text-white text-xl font-bold text-center">
                                    Nibh viverra
                                </div>
                                <div className="flex text-white text-base text-center">
                                    Sit bibendum donec dolor fames neque <br /> vulputate non sit aliquam. Consequat <br /> turpis natoque leo, massa.
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="flex flex-col w-full h-auto items-center justify-center gap-[16px]">
                                <img src="icons/trophy-2.svg" className="h-[64px] w-[64px] object-contain" />
                                <div className="text-white text-xl font-bold text-center">
                                    Nibh viverra
                                </div>
                                <div className="flex text-white text-base text-center">
                                    Sit bibendum donec dolor fames neque <br /> vulputate non sit aliquam. Consequat <br /> turpis natoque leo, massa.
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="flex flex-col w-full h-auto items-center justify-center gap-[16px]">
                                <img src="icons/trophy-3.svg" className="h-[64px] w-[64px] object-contain" />
                                <div className="text-white text-xl font-bold text-center">
                                    Nibh viverra
                                </div>
                                <div className="flex text-white text-base text-center">
                                    Sit bibendum donec dolor fames neque <br /> vulputate non sit aliquam. Consequat <br /> turpis natoque leo, massa.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 */}

            <div className="absolute flex items-center justify-left w-full h-auto">
                {/* Background Image */}
                <Image
                    className="-z-10"
                    src="gradient/gradient-50.svg"
                    alt="bg-gradient"
                    width={800}
                    height={800}
                />
            </div>
            {/* Content */}
            <div className='absolute w-full h-auto items-center justify-center gap-[80px]'>
                <div className="z-10 flex flex-col w-full h-auto items-center justify-center gap-[80px]">
                    <div className="flex flex-col w-[1280px] items-start justify-start m-[80px] gap-[80px]">
                        {/* Text Content */}
                        <div className="flex flex-col w-[1080px] items-start justify-start gap-[32px]">
                            <div className="text-white text-6xl text-left">We’re here to make
                                <br />design accessible </div>
                            <div className="flex  text-white text-base text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
                            </div>
                            <button className="bg-[#0c0d0d] rounded-lg  p-3 flex flex-row gap-2 items-center justify-center relative hover:bg-[#2c2c2c]">
                                <div className=" text-white text-base text-center">More Service</div>
                            </button>
                        </div>
                        {/* Card Content */}
                        <div className="bg-white rounded-[16px] border border-[#e2e8f0] flex flex-row items-center justify-between w-full h-[356px] relative shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.07),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] overflow-hidden">
                            {/* Left */}
                            <div className="flex flex-row items-center justify-center flex-1 h-full relative">
                                <img src="image/web.png" alt="Image" className="object-cover h-full w-full" />
                            </div>
                            {/* Right */}
                            <div className="flex flex-col gap-[16px] p-[32px] flex-1 h-full">
                                <div className='text-[#0F172A] text-2xl font-bold'>UX/UI design</div>
                                <div className='text-[#0F172A] text-base font-normal'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>
                                <div className='text-[#0F172A] text-xl font-normal'>Key Feature</div>
                                <div className='flex flex-row gap-[16px]'>
                                    <div className="border-[1px] border-[#757575] rounded-full px-[8px] flex flex-row gap-[10px]  h-[32px] items-center justify-center shrink-0 relative hover:bg-[#e3e3e3]">
                                        <div className='text-[#474747] text-sm'>User Research</div>
                                    </div>
                                    <div className="border-[1px] border-[#757575] rounded-full px-[8px] flex flex-row gap-[10px]  h-[32px] items-center justify-center shrink-0 relative hover:bg-[#e3e3e3]">
                                        <div className='text-[#474747] text-sm'>Wireframes</div>
                                    </div>
                                    <div className="border-[1px] border-[#757575] rounded-full px-[8px] flex flex-row gap-[10px]  h-[32px] items-center justify-center shrink-0 relative hover:bg-[#e3e3e3]">
                                        <div className='text-[#474747] text-sm'>Prototype</div>
                                    </div>
                                </div>
                                <div className='text-[#0F172A] text-xl font-normal'>Tools</div>
                                <div className='flex flex-row gap-[16px]'>
                                    <div className="border-[1px] border-[#757575] rounded-full px-[8px] flex flex-row gap-[10px]  h-[32px] items-center justify-center shrink-0 relative hover:bg-[#e3e3e3]">
                                        <div className='text-[#474747] text-sm'>Figma</div>
                                    </div>
                                    <div className="border-[1px] border-[#757575] rounded-full px-[8px] flex flex-row gap-[10px]  h-[32px] items-center justify-center shrink-0 relative hover:bg-[#e3e3e3]">
                                        <div className='text-[#474747] text-sm'>Adobe</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}
export default NavbarDesktop;
