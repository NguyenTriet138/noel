import React, {useEffect, useState} from 'react';
import { Container} from "react-bootstrap";
import './gift_box.css';
const GiftBox = () => {
    const [stepValue, setStepValue] = useState("step-1");
    useEffect(() => {
        setTimeout(() => {
            setStepValue("step-2");
        }, 2000)
    }, [])

    return (
        <>
            <div id="merrywrap" className={`merrywrap ${stepValue}`}>
                <div className="giftbox">
                    <div className="cover">
                        <div></div>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    );
};

export default GiftBox;