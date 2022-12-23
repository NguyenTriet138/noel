import React from 'react';
import './show-gift.css';
import {Button, Card, CardImg, Col, Container, Image, Modal, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const ShowGift = (props) => {
    const navigate = useNavigate();
    const giftList = props.giftList;
    const otherGifts = giftList.filter(gift => !gift.choosen);
    let chosenGift = null;
    if (otherGifts.length == 8) chosenGift = giftList.filter(gift => gift.choosen)[0]
    console.log('Show Gift : ');
    console.log(giftList);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Chúc mừng đã nhận được món quà {props.nameGift}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <div className='h-100 d-flex flex-column justify-content-between'>
                            {otherGifts.map((gift, index) => {
                                if (index < 4)
                                    return (
                                        <CardImg className='gift_show-gift' src={process.env.PUBLIC_URL + gift.img_url}/>
                                    )
                            })}
                            {/*<CardImg className='gift_show-gift' src={process.env.PUBLIC_URL +'/nuoc-tay-trang-xanh.jpg'}/>*/}
                            {/*<CardImg className='gift_show-gift' src={process.env.PUBLIC_URL +'/mu-bucket-vanh-cup-nhung-gan-768x768.jpg'}/>*/}
                        </div>
                    </Col>
                    <Col xs={8}>
                        <Card className='gift_receive_show-gift'>
                            <Card.Img src={process.env.PUBLIC_URL + chosenGift?.img_url} alt="Card image" />
                            <Card.ImgOverlay>
                                <div className='money-custom '>
                                    <b>150,000 VNĐ</b>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <div className='h-100 d-flex flex-column justify-content-between'>
                            {otherGifts.map((gift, index) => {
                                if (index >= 4)
                                    return (
                                        <CardImg className='gift_show-gift' src={process.env.PUBLIC_URL + gift.img_url}/>
                                    )
                            })}
                        </div>
                    </Col>
                </Row>



            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => navigate('/my-wish')}>Tiếp tục</Button>
            </Modal.Footer>
            {/*<div className={'h-100 w-100'}*/}
            {/*     style={{position : 'relative'}}>*/}
            {/*    /!*<Image src="https://www.fg-a.com/print-borders/2020-christmas-tree-star-border.jpg"*!/*/}
            {/*    /!*       className={'background-image'}/>*!/*/}
            {/*    <div className={"modal-container"}>*/}
            {/*        <Modal.Header closeButton>*/}
            {/*            <Modal.Title id="contained-modal-title-vcenter">*/}
            {/*                Chúc mừng đã nhận được món quà {props.nameGift}*/}
            {/*            </Modal.Title>*/}
            {/*        </Modal.Header>*/}
            {/*        <Modal.Body>*/}
            {/*            <Row>*/}
            {/*                <Col>*/}
            {/*                    <div className='h-100 d-flex flex-column justify-content-between'>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                    </div>*/}
            {/*                </Col>*/}
            {/*                <Col xs={8}>*/}
            {/*                    <CardImg className='gift_receive_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                </Col>*/}
            {/*                <Col>*/}
            {/*                    <div className='h-100 d-flex flex-column justify-content-between'>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                        <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>*/}
            {/*                    </div>*/}
            {/*                </Col>*/}
            {/*            </Row>*/}



            {/*        </Modal.Body>*/}
            {/*        <Modal.Footer>*/}
            {/*            <Button onClick={() => navigate('/my-wish')}>Tiếp tục</Button>*/}
            {/*        </Modal.Footer>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Modal>
    );
};

export default ShowGift;