"use client"
import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const Signature = () => {
    const [sign, setSign] = useState();
const handleClear=() =>{
    sign.clear()
}
    return (
        <div className='flex flex-row ml-4 gap-x-3 shadow-lg'>
            <div className=' w-[65%] border border-[#ffff]'>
            <SignatureCanvas
                    penColor='green'
                    penWidth={0.3}  // Set the desired pen width
                    canvasProps={{ width: 200, height: 40, className: 'sigCanvas' }}
                    ref={(data) => setSign(data)}
                />

            </div>
            <div className='flex items-end cursor-pointer text-[white] text-[14px] hover:text-[red] transition-all' onClick={handleClear}>Clear</div>
        </div>
    );
};

export default Signature;
