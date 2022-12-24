import React, {useEffect, useState} from 'react';
import { Container} from "react-bootstrap";
import './twinkling_star.css';
const TwinklingStar = () => {
    const [stepValue, setStepValue] = useState("step-1");
    useEffect(() => {
        setTimeout(() => {
            setStepValue("step-2");
        }, 2000)
    }, [])

    return (
        <>
            <div className="stars"></div>
            <div className="twinkling"></div>
        </>
    );
};

export default TwinklingStar;