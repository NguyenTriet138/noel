import React, {useEffect, useState} from 'react';
import {Button, CardImg, Container, Image} from "react-bootstrap";
import './home.css';
import {createRoutesFromChildren, useNavigate} from "react-router-dom";
import database from "../../firebase";
import {onValue, ref, get, child} from "firebase/database";

const Home = () => {
    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, 'event')).then((snapshot) => {
            console.log(snapshot.val());
        })
    }, [])
    const navigate = useNavigate();
    const [isMessageShow, setIsMessageShow] = useState(false);
    return (
        <Container fluid className='h-100 p-0'>
            <Image hidden src={`${process.env.PUBLIC_URL}/christmas-background-illustrator.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/bg-my-wish.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/loading.gif`}/>

            <Image hidden src={`${process.env.PUBLIC_URL}/mat_na.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/bong_tai.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/3d-gold-coin-png-ok.png`}/>

            <Image hidden src={`${process.env.PUBLIC_URL}/santa_with_sleigh.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/sunshine-6.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/sunshine-2.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/sunshine-1.png`}/>
            <div className='d-flex  justify-content-center align-items-center h-100'
                 style= {{backgroundImage: `url(${process.env.PUBLIC_URL}/background.webp)`, backgroundSize: 'cover',
                          position : 'relative'}}>
                {
                    <>
                        <div className='container-letter'>
                            <div className='custom-paragraph'>
                                <p>Nhân dịp dáng sinh, và lời hứa tặng Nô 1 món quà sau thi xong. Tôi có tự làm 1 trang web nhỏ nhỏ, đây là tâm huyết của tôi trong 2 tuần qua, hi vọng Bé Nô thích ❤.</p>
                                <p>Hướng dẫn: Sau khi Nô click vào ô Next bên dưới, Tôi có để những món quà bí mật bên trong các hộp quà đc treo trên cây thông. Nô chỉ được chọn 1 trong những hộp quà đó. Phần quà bất ngờ sẽ được gửi cho Nô sau! Chúc Nô may mắn nhé!</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <Button className='btn m-3' size='lg' variant='primary'
                                        onClick={() => navigate('/receive-gift')}>Next</Button>
                            </div>
                        </div>
                    </>

                }

            </div>
        </Container>
    );
};

export default Home;