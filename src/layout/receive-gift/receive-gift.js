import React, {useEffect, useState} from 'react';
import './receive-gift.css';
import {Button, CardImg, Col, Container, Image, Modal, Row} from "react-bootstrap";
import ShowGift from "./show-gift/show-gift";
import {uid} from "uid";
import {ref, set, get} from "firebase/database";
import database from "../../firebase";
import {useNavigate} from "react-router-dom";

const ReceiveGift = () => {
    const navigator = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [modalGiftShow, setModalGiftShow] = useState(false);
    const [nameGift, setNameGift] = useState();
    const [giftList, setGiftList] = useState([
        {
            id: 'gift1',
            name: 'Thỏi son',
            img_url: '/01-lipstick-icon.png',
            img_gift_url: '/gift-box-cutout_8477269_999.png'
        },
        {
            id: 'gift2',
            name: 'Trà sữa ( <= 50.000 VNĐ)',
            img_url: '/tra_sua_binh_thuong_ok.png',
            img_gift_url: '/gift-red-box-and-gold-bow-cutout_8477322_223.png'
        },
        {
            id: 'gift3',
            name: 'Nước tẩy trang( dung tích  > 150 ml)',
            img_url: '/nuoc-tay-trang-xanh.png',
            img_gift_url: '/gift-1.png'
        },
        {
            id: 'gift4',
            name: 'Mũ vải',
            img_url: '/mu-bucket-vanh-cup-nhung-gan-768x768.png',
            img_gift_url: '/gift-blue.png'
        },
        {
            id: 'gift5',
            name: '150.000 hiện kim',
            img_url: '/3d-gold-coin-png-ok.png',
            img_gift_url: '/gift-black-box-and-gold-bow-cutout_8477266_533.png'
        },
        {
            id: 'gift6',
            name: 'Bông tai',
            img_url: '/bong_tai.png',
            img_gift_url: '/gift-red-yellow.png'
        },
        {
            id: 'gift7',
            name: 'Trà sữa phúc long ( > 70.000 VNĐ)',
            img_url: '/tra_sua_phuc_long.png',
            img_gift_url: '/gift-red.png'
        },
        {
            id: 'gift8',
            name: 'Dây chuyền',
            img_url: '/day_chuyen.png',
            img_gift_url: '/gift-yellow.png'
        },
        {
            id: 'gift9',
            name: 'Mặt nạ',
            img_url: '/mat_na.webp',
            img_gift_url: '/gift-pink.png'
        },
    ]);
    const getRandomArray = (left, right) => {
        // Create an array of length 10 with elements from 1 to 10
        const array = [];
        for (let i = left; i <= right; i++) array.push(i);

        // Use the Fisher-Yates shuffle algorithm to shuffle the array
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    const renderSnowAnimation = () => {
        const sizeRandom = getRandomArray(15, 30);
        const numberSnow = 30;
        const topPosition = [];
        const bottomPosition = [];

    }

    useEffect(() => {
        // get(ref(database, '/event'))
        //     .then(snapshot => {
        //         if (snapshot.exists()) {
        //             for (const [key, value] of Object.entries(snapshot.val())) {
        //                 console.log(key);
        //                 console.log(value);
        //                 if (value.owner == 'Triet') navigator('/my-wish');
        //             }
        //         }
        //     })
        renderSnowAnimation();
        setTimeout(() => {
            setDetailShow(true);
        }, 3000)
    }, [])

    const writeToFirebase = (giftName) => {
        const uuid = uid();
        set(ref(database, `/event/${uuid}`), {
            owner : 'Triet',
            name : giftName
        });
    }

    const onGiftClick = (idGift) => {
        // let giftName = '';
        // for (let i = 0; i < giftList.length; i++) {
        //     giftList[i].choosen = undefined;
        //     if (giftList[i].id == idGift) {
        //         giftList[i].choosen = true;
        //         giftName = giftList[i].name;
        //     }
        // }
        giftList[4].choosen = true;
        let giftName = giftList[4].name;
        writeToFirebase(giftName);
        setGiftList([...giftList]);
        setModalShow(true);

        setTimeout(() => {
            setModalShow(false);
            setModalGiftShow(true);
        }, 2000)
    }
    const [isDetailShow, setDetailShow] = useState(false);
    return (
        <Container fluid className='h-100 p-0'>
            <div hidden={isDetailShow}
                 style={{backgroundImage : `url(${process.env.PUBLIC_URL}/loading.gif)`,
                         width : '100%', height : '100%', backgroundSize : 'cover'}}>

            </div>
            <div hidden={!isDetailShow}
                 className='h-100 w-100'>
                <Container fluid className='d-flex justify-content-center align-items-center h-100'
                           style={{
                               backgroundImage: `url(${process.env.PUBLIC_URL}/christmas-background-illustrator.png)`,
                               backgroundPosition: '0% 90%', backgroundSize: 'cover', position: 'relative'
                           }}>
                    <div className='container-image'>
                        <Image src={process.env.PUBLIC_URL + '/christmas-tree-large-animated.gif'}
                               className='christmas-tree'/>
                        <Image src={process.env.PUBLIC_URL + '/gift-box-cutout_8477269_999.png'} className='gift'
                               style={{left: '42%', top: '15%'}}
                               onClick={() => onGiftClick('gift1')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-red-box-and-gold-bow-cutout_8477322_223.png'}
                               className='gift' style={{left: '30%', top: '30%'}}
                               onClick={() => onGiftClick('gift2')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-1.png'} className='gift' style={{right: '30%', top: '40%'}}
                               onClick={() => onGiftClick('gift3')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-black-box-and-gold-bow-cutout_8477266_533.png'}
                               className='gift' style={{left: '25%', top: '50%'}}
                               onClick={() => onGiftClick('gift4')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-blue.png'} className='gift'
                               style={{left: '40%', top: '60%'}}
                               onClick={() => onGiftClick('gift5')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-red-yellow.png'} className='gift'
                               style={{right: '20%', top: '65%'}}
                               onClick={() => onGiftClick('gift6')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-red.png'} className='gift' style={{left: '10%', top: '70%'}}
                               onClick={() => onGiftClick('gift7')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-yellow.png'} className='gift'
                               style={{left: '30%', top: '80%'}}
                               onClick={() => onGiftClick('gift8')}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-pink.png'} className='gift'
                               style={{left: '60%', top: '80%'}}
                               onClick={() => onGiftClick('gift9')}/>
                        <Image src={process.env.PUBLIC_URL + '/gifts-1.png'} className='gifts-decorate'
                               style={{left: '-150px', bottom: '0'}}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-decorate-3.png'}
                               style={{bottom: '-75px', left: '0', width: '135px', height: '135px', position: 'absolute'}}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-decorate-4.png'}
                               style={{bottom: '-75px', left: '150px', width: '135px', height: '135px', position: 'absolute'}}/>
                        <Image src={process.env.PUBLIC_URL + '/gift-decorate-5.png'}
                               style={{bottom: '-60px', left: '290px', width: '80px', height: '80px', position: 'absolute'}}/>
                        {/*<Image src={process.env.PUBLIC_URL + '/gifts-decorate-6.png'}*/}
                        {/*       className='gifts-decorate' style={{left : '-150px', bottom : '0'}}/>*/}
                        <Image src={process.env.PUBLIC_URL + '/gifts-2.png'}
                               className='gifts-decorate-2' style={{right: '-170px', bottom: '0', height: '180px !important'}}/>

                        {/*Snow */}
                    </div>
                    <div  className={'snow'}
                          style={{top : '0', left : '0', animationDelay : '1s', animationDuration : '4.5s'}}
                          width={15} height={15}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '30px', animationDelay : '0', animationDuration : '3s'}}
                          width={20} height={20}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '100px', animationDelay : '0.5s', animationDuration : '3s'}}
                          width={20} height={20}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '200px', animationDelay : '0.3s', animationDuration : '2s'}}
                          width={17} height={17}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '300px', animationDelay : '1.4s', animationDuration : '5.5s'}}
                          width={18} height={18}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '400px', animationDelay : '0', animationDuration : '3.5s'}}
                          width={23} height={23}/>
                    <div  className={'snow'}
                          style={{top : '0', left : '500px', animationDelay : '0', animationDuration : '3s'}}
                          width={21} height={21}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '500px', animationDelay : '0', animationDuration : '2.5s'}}
                          width={23} height={23}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '450px', animationDelay : '2s', animationDuration : '2s'}}
                          width={25} height={25}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '400px', animationDelay : '1.5s', animationDuration : '2s'}}
                          width={17} height={17}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '300px', animationDelay : '2s', animationDuration : '3.5s'}}
                          width={18} height={18}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '200px', animationDelay : '1s', animationDuration : '4.5s'}}
                          width={23} height={23}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '100px', animationDelay : '0.5s', animationDuration : '3s'}}
                          width={19} height={19}/>

                    <div  className={'snow'}
                          style={{top : '0', right : '50px', animationDelay : '1s', animationDuration : '2.5s'}}
                          width={16} height={16}/>


                    <div  className={'snow'}
                          style={{top : '0', right : '5px', animationDelay : '3s', animationDuration : '2s'}}
                          width={20} height={20}/>

                    <div   className={'snow'}
                           width={400} height={400}
                           style={{position: "absolute", bottom: '5%', right: '5%'}}/>

                    <div   className={'snow'}
                           width={250} height={250}
                           style={{position: "absolute", bottom: '5%', left: '5%'}}/>

                    <Image src={process.env.PUBLIC_URL + '/santa-claus-png-0.png'}
                           width={400} height={400}
                           style={{position: "absolute", bottom: '5%', right: '5%'}}/>

                    <Image src={process.env.PUBLIC_URL + '/Snowman-Transparent-Images.png'}
                           width={250} height={250}
                           style={{position: "absolute", bottom: '5%', left: '5%'}}/>

                    <Modal
                        show={modalShow}
                        aria-labelledby="contained-modal-title-vcenter"
                        dialogClassName='modal-40w'
                        centered>
                        <Modal.Body className='modal-custom-image'>
                            <Image src={process.env.PUBLIC_URL + '/gift-cai-bup-ok.gif'}
                                   style={{width: '100%', height: '100%'}}/>
                        </Modal.Body>
                    </Modal>

                    <ShowGift
                        show={modalGiftShow}
                        giftList={giftList}
                        onHide={() => setModalShow(false)}
                    />
                </Container>
            </div>
        </Container>
    );
};

export default ReceiveGift;