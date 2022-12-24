import React, {useEffect, useState} from 'react';
import {Button, CardImg, Container, Image} from "react-bootstrap";
import './first_screen.css';
import {Draggable} from "gsap/Draggable";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";
const FirstScreen = () => {
    const [dashOffset, setDashOffset] = useState("0");
    const [dashArray, setDashArray] = useState("none");
    const navigator = useNavigate();
    let maxDrag = 705;
    let heartFillMaxPosY = -50;
    let followerVX = 0;
    // let trackTween = null;
    const select = e => document.querySelector(e);
    gsap.registerPlugin(Draggable);


    useEffect(() => {
        const draggerProp = gsap.getProperty('.dragger');
        let followerProp = gsap.getProperty('.follower');
        let liquidFollowerY = 0;

        gsap.set('#loveSliderSVG', {
            visibility: 'visible'
        })
        const onDrag = () => {
            let posX = draggerProp('x');
            let progress = posX / maxDrag;
            gsap.to('.heartChat', {
                x: posX - 18
            })
            let percent = progress * 100;
            let percentY = progress * heartFillMaxPosY;
            if (posX == 0) {
                setDashOffset("0");
                setDashArray("none");
            } else {
                setDashOffset("-" + posX);

                setDashArray(`${700 - posX}px, ${posX + 0.1}px`);
            }
            console.log(`0% ${percent}%`)

            // trackTween = gsap.to('.track', {
            //     drawSVG: `100% ${percent}%`,
            //     ease: 'elastic(0.4, 0.16)'
            // })

            gsap.to('.heartFill', {
                duration: 0.1,
                y: percentY
            })

            if (progress == 1) {
                // document.querySelector(".container").style.display = "block";
                setTimeout(() => navigator('/home'), 1000)
                // document.querySelector("#loveSliderSVG").style.display = "none";
                // navigator('/home');
            }
        }

        const heartFill = select('.heartFill');
        const myDragger = Draggable.create('.dragger', {
            type: 'x',
            bounds: {minX: 0, maxX: maxDrag, minY: 0, maxY: 0},
            onDrag: onDrag,
            onPress: (e) => {
                gsap.to('.heartChat', {
                    duration: 0.1,
                    scale: 0.98
                })
            },
            onRelease: (e) => {
                gsap.to('.heartChat', {
                    duration: 0.6,
                    scale: 1,
                    ease: 'elastic(0.93, 0.35)'
                })
            },
            onThrowUpdate: onDrag,
            inertia: true,
            overshootTolerance: 0,
            throwResistance: 8000
        })

        gsap.set('.heartFill', {
            transformOrigin: '50% 0%'
        })
        gsap.to('.heartFill', {
            rotation: '+=0',
            repeat: -1,
            ease: 'linear',
            modifiers: {
                rotation: gsap.utils.unitize((rotation) => {
                    let val = rotation + liquidFollowerY * 0.5;
                    return (val)
                })
            }
        })
        gsap.set('.heartChat', {
            x: -18,
            y: 235,
            transformOrigin: '50% 105%'
        })
        gsap.to('.follower', {
            x: '+=0',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => {
                    followerVX += (draggerProp('x') - followerProp('x')) * 0.08;
                    liquidFollowerY += (draggerProp('x') - followerProp('x')) * 0.98;
                    followerVX *= 0.79;
                    liquidFollowerY *= 0.4;
                    return followerProp('x') + followerVX;
                })
            }
        })
        gsap.to('.liquidFollower', 31, {
            x: '+=0',
            repeat: -1,
            modifiers: {
                x: (x) => {
                    liquidFollowerY += (draggerProp('x') - gsap.getProperty('.liquidFollower', 'x')) * 0.98;
                    liquidFollowerY *= 0.54;
                    return followerProp('x') + liquidFollowerY;
                }
            }
        })
        gsap.to('.heartChat', {
            rotation: '+=0',
            repeat: -1,
            ease: 'linear',
            modifiers: {
                rotation: gsap.utils.unitize((rotation) => {
                    let val = rotation + followerVX * 0.595
                    return -val;
                })
            }
        })
    }, [])


    //Processing
    //Heart fill


    return (
        <Container fluid className='h-100 p-0 custom-container'>
            {/*<audio autoPlay loop controls*/}
            {/*       style={{position : "absolute", top : 0}}>*/}
            {/*    <source src={`${process.env.PUBLIC_URL}/music.mp3`}/>*/}
            {/*</audio>*/}
            <Image hidden src={`${process.env.PUBLIC_URL}/background.webp`}/>
            <svg id="loveSliderSVG" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid meet">
                <defs></defs>
                <line className="trackBg" x1="50" x2="750" y1="366" y2="366" stroke="#FFFCF9" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="15"/>
                <line className="trackMiddle" x1="50" x2="750" y1="366" y2="366" stroke="green" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="6" opacity="1"/>
                <line className="track" x1="50" x2="750" y1="366" y2="366" stroke="#ff595e" strokeLinecap="round"
                      style={{strokeDashoffset : dashOffset, strokeDasharray : dashArray}}
                      strokeLinejoin="round" strokeWidth="6"/>
                <g id="heartChat" className="heartChat">
                    <path
                        d="M115.44,92H81.15a8.32,8.32,0,0,0-5.9,2.45l-9.9,9.9a1,1,0,0,1-1.34,0l-9.9-9.9A8.35,8.35,0,0,0,48.2,92H13.91A10.44,10.44,0,0,1,3.5,81.6V13.91A10.45,10.45,0,0,1,13.91,3.5H115.44a10.44,10.44,0,0,1,10.41,10.41V81.6A10.43,10.43,0,0,1,115.44,92Z"
                        fill="none"/>
                    <path
                        d="M115.44,92H81.15a8.32,8.32,0,0,0-5.9,2.45l-9.9,9.9a1,1,0,0,1-1.34,0l-9.9-9.9A8.35,8.35,0,0,0,48.2,92H13.91A10.44,10.44,0,0,1,3.5,81.6V13.91A10.45,10.45,0,0,1,13.91,3.5H115.44a10.44,10.44,0,0,1,10.41,10.41V81.6A10.43,10.43,0,0,1,115.44,92Z"
                        fill="none" stroke="#FFFCF9" strokeMiterlimit="10"  strokeWidth="5"/>

                    <mask id="heartFillMask">
                        <rect className="heartFill" x="-54" y="72" width="237" height="91" fill="#FFF"/>
                    </mask>
                    <path id="heartBg"
                          d="M76.16,23a13.23,13.23,0,0,0-10.83,5.63,13.24,13.24,0,0,0-24.08,7.62c0,18.06,24.08,34.92,24.08,34.92S89.41,54.33,89.41,36.27A13.25,13.25,0,0,0,76.16,23Z"
                          fill="#FFF" opacity="0.1"/>
                    <g mask="url(#heartFillMask)">
                        <path id="XXpinkHeart"
                              d="M76.16,23a13.23,13.23,0,0,0-10.83,5.63,13.24,13.24,0,0,0-24.08,7.62c0,18.06,24.08,34.92,24.08,34.92S89.41,54.33,89.41,36.27A13.25,13.25,0,0,0,76.16,23Z"
                              fill="#ff595e"/>
                        <g id="shineGroup">
                            <path
                                d="M89.34,37.92c-1.39,17.42-24,33.26-24,33.26s-1.8-1.26-4.42-3.46C66.39,64.18,83.07,52.53,89.34,37.92Z"
                                fill="#7f474b" opacity="0.32"/>
                            <path
                                d="M60.15,26a14.06,14.06,0,0,0-1.72-.1c-7.33,0-13.48,5.38-15.1,12.63,0-.43-.06-.86-.06-1.3,0-6.88,5.27-12.46,11.77-12.46A11.2,11.2,0,0,1,60.15,26Z"
                                fill="#fff" opacity="0.5"/>
                            <path
                                d="M81,26.29c-.39-.12-.79-.22-1.2-.31-5.22-1.1-10.21.87-12.18,4.51a5.62,5.62,0,0,1,.1-.7c.78-3.7,5.17-5.9,9.79-4.92A10.26,10.26,0,0,1,81,26.29Z"
                                fill="#fff" opacity="0.5"/>
                        </g>
                    </g>

                </g>
                {/*<circle className="follower" cx="0" cy="0" r="0" fill="#62B6CB" fillOpacity="1" stroke="#FFFCF9"*/}
                {/*        strokeWidth="0"/>*/}
                {/*<circle className="liquidFollower" cx="0" cy="0" r="0" fill="#62B6CB" fillOpacity="1" stroke="#FFFCF9"*/}
                {/*        strokeWidth="0"/>*/}
                <rect className="dragger" x="-100" y="105" width="290" height="220" fill="#62B6CB" fillOpacity="0"
                      stroke="#FFFCF9"
                      strokeWidth="0"/>
            </svg>


        </Container>
    );
};

export default FirstScreen;