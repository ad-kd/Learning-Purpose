import React from 'react'
import { useRef } from 'react';
import VariableProximity from '../rebits/VariableProximity.jsx';
import LightRays from '../rebits/LightRays.jsx';
import TextType from '../rebits/TextType.jsx';



const hero = () => {
    const description = `
Company-IT is transforming the IT sector by solving the costly and
 complex problem of AI using our proprietary Python. 
 This unique solution has already generated 98%, demonstrating 
 immense value and a clear path to dominating the $60 Billion global market opportunity. We offer 
 foreign investors a strategic entry point into a high-growth, resilient tech venture with a projected 
 Strategy. Join us in our Org
to accelerate our international expansion and unlock significant mutual returns.`;

    const containerRef = useRef(null);
    return (
        <div >

            <div style={{ width: '100%', height: '600px', position: 'relative', overflow: 'hidden', zIndex: -1 }}>

                <LightRays
                    raysOrigin="top-left"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="bkclr"
                />

                <div className="hero-text ">

                    <TextType className=' text-2xl md:text-6xl font-bold text-white'
                        text={["Welcome To Company-IT!", "Explore US!!", "Happy To Help You!!!"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="●"
                    />
                    <br />
                    <div className='pt-5'>
                        <div
                            ref={containerRef}
                            style={{ position: 'relative' }}
                        >

                            <VariableProximity
                                label={description}
                                className={'variable-proximity-demo' + 'text-wrap break-all pt-4 pr-3 md:pl-20 md:pr-20 text-white'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='linear'
                            />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default hero