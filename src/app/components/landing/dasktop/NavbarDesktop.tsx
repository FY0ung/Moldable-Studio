import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

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
                                src="/icons/logo.png"
                                alt="Moldable Studio Logo"
                                width={64}
                                height={34}
                            />
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
                                src="/icons/logo.png"
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
                    src="/gradient/gradient.svg"
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
                                <img src="/icons/trophy1.svg " className="h-[64px] w-[64px] object-contain" />
                                <div className="text-white text-xl font-bold text-center">
                                    Nibh viverra
                                </div>
                                <div className="flex text-white text-base text-center">
                                    Sit bibendum donec dolor fames neque <br /> vulputate non sit aliquam. Consequat <br /> turpis natoque leo, massa.
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="flex flex-col w-full h-auto items-center justify-center gap-[16px]">
                                <img src="/icons/trophy2.svg" className="h-[64px] w-[64px] object-contain" />
                                <div className="text-white text-xl font-bold text-center">
                                    Nibh viverra
                                </div>
                                <div className="flex text-white text-base text-center">
                                    Sit bibendum donec dolor fames neque <br /> vulputate non sit aliquam. Consequat <br /> turpis natoque leo, massa.
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="flex flex-col w-full h-auto items-center justify-center gap-[16px]">
                                <img src="/icons/trophy3.svg" className="h-[64px] w-[64px] object-contain" />
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
            {/* <div className='w-full mt-[56px]'>
                <div className='w-full h-[906px] flex flex-col justify-center items-center align-middle p-[80px]'>
                    <div className="relative w-full h-[819px] flex flex-col items-center justify-center"> */}
                        {/* Background */}
                        {/* <div
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
                            }}
                        ></div> */}
                        {/* <div className='flex flex-col w-full items-center justify-center gap-[80px]'>
                            <div className='flex flex-col w-full items-center justify-center gap-[40px]'> */}
                                {/* Text Content */}
                                {/* <div className="flex flex-col justify-center items-center gap-[4px] z-10">
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
                        </div> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </div>


    )
}
export default NavbarDesktop;
