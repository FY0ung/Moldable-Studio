import React from 'react';

import Link from 'next/link';
import Image from 'next/image';


const NavbarMobile: React.FC = () => {
  return (
    <div>
      {/* header */}
      <div className="bg-background-paper backdrop-blur-md p-2 flex flex-row items-center justify-center fixed top-0 left-0 right-0 z-50">
        <div className="ml-[24px] mr-[24px] w-full flex flex-row justify-between">
          <div className="py-[4px] px-[4px]">
            <Link href="/landing" passHref>
              <Image
                className="w-[64px] h-[34px]"
                src="/icons/logo.png"
                alt="Moldable Studio Logo"
                width={54}
                height={24}
              />
            </Link>
          </div>
          {/* menu icons */}
          <div>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className='w-full mt-[56px]'>
                <div className='w-full h-[900px] flex flex-col justify-center items-center align-middle p-[80px]'>
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
                            }}
                        ></div>
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
                            <Image
                                className="w-[520px] h-[402px]"
                                src="/icons/logo.png"
                                alt="Moldable Studio Logo"
                                width={520}
                                height={420}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
    </div>
  )
}
export default NavbarMobile;
