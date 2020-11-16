import React from 'react';
import { Image } from "antd";
import {STICKY_AD} from "../../constants";
export default function StickyAd() {
    return (
        <div className="sticky-ad">
            <Image 
                src={STICKY_AD}
                alt=""
                width="100%"
            />
        </div>
    )
}
