import React from 'react';
import { Image } from '@chakra-ui/react';

const Item = () => {
    return (
        <div
            className='text-white lg:w-[570px] mt-[60px] pl-3 lg:pl-[100px] lg:mt-0'
        >
            <div className='text-[22px] text-[#ff847c] font-medium'>ECOSYSTEM</div>
            <div className=' clear-both mt-[30px] text-[26px] lg:text-[48px] leading-[40px] lg:leading-[64px]'>
                Embrace
            </div>
            <div className=' clear-both text-[26px] lg:text-[48px] leading-[40px] lg:leading-[64px]'>
                <span>Significance.</span>
                <Image
                    className='inline-block w-[32px] h-[32px] ml-1 lg:ml-2'
                    src='/icon-ecosystem.svg'
                    alt=''
                />
            </div>
            <div className='text-[12px] lg:text-[18px] font-light mt-[30px] leading-[38px]'>
                Join the Verisense Ecosystem. Every Contribution Matters.
            </div>
        </div>
    );
};

export default React.memo(Item);
