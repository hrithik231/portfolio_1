import { ReactComponent as LightningIcon } from '../style/svg_icons/lightning-lightning-svgrepo-com.svg';
import { useState, useEffect } from 'react';
import "../style/Animation/highlight.css";
import Icons from '../main_view/Icons';
import "../style/Position.css";
import "../style/Common.css";
import "../style/Color.css";
import "../style/Font.css";
import React from 'react';
import Ads from './Ads';
import Details from './Details';

export default function Front() {
    const [data, setdata] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useEffect(() => {
        images();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    function images() {
        fetch(
            "https://api.unsplash.com/search/photos/?client_id=uzs3ntGDSswLgjEwEp_XGlhz-iLbkJlOJ9FSPyY-Vq8&query=cars"
        )
            .then((response) => response.json())
            .then((data) => setdata(data.results));
    }

    return (
        < div style={{ backgroundColor: "black" }}>
            <div>
                <Details />
            </div>
            <div className="w1000px left10p h100p tp-0 p-fix bg-black">
                <div>
                    <LightningIcon className='w70px h45px p-rel tp20px left10' /> <span className='f-s-xl f-w-b rgb-orange-2-1-7'>Astrix.</span>
                </div>

                <div className='p-abs tp50p dis-gird clr-white  f-s-xxl opacity12 left2p f-w-b'>
                    <span>LUXURY </span>
                    <span>IS</span>
                    <span>Love <span class="clr-yellow">POWER</span></span>
                    <span>LIFE STYLE</span>
                </div>

                <div className="dis-gird grd-temp-col p-rel w600px tp100px left2p gap-10px">
                    <div className='p-abs f-w-b f-s-xl tp-6'>
                        <span className='clr-white'>Lunar Palace:</span>
                        <span className='clr-white'>(ft. Kanye west)</span>
                    </div>

                    {data.map((item, index) => (
                        <div key={index} className={`dis-flex flex-dire${index === highlightedIndex ? ' highlighted' : ''}`}>
                            <img
                                src={item.urls.raw}
                                alt="error"
                                width="700%"
                            />
                        </div>
                    ))}

                    <div className='p-rel tp50p left50px pad-10px pad-right100 pad-left20 brd-left-right-20px bdr-1p-solid brd-right-none bg-black-light f-w-b '>
                        <span className='mrg-right-45px clr-white crs-p'>Event</span>
                        <span className='bdr-1p-solid pad-10px pad-left20 brd-rad20px clr-white bg-black-dark pad-right30px crs-p'>Collections</span>
                    </div>
                </div>
                <div className='p-abs btm10 left45p dis-flex gap-20px'>
                    <Icons />
                </div>
            </div>
            <Ads />
        </div>
    );
}
