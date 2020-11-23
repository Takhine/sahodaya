import React from 'react';
import { Image } from "antd";
import {STICKY_AD} from "../../constants";
export default function StickyAd() {
    return (
        <div className="sticky-ad">
            <div style={{position: "relative"}}>
            <Image 
                src={STICKY_AD}
                alt=""
                width="100%"
            />
            <span className="ad-tag">Sponsored</span>
            </div>
            
        </div>
    )
}
