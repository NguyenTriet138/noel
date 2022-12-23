import React, {useEffect, useState} from 'react';
import {Button, CardImg, Container} from "react-bootstrap";
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
            <div className='d-flex  justify-content-center align-items-center h-100'
                 style= {{backgroundImage: `url(${process.env.PUBLIC_URL}/background.webp)`, backgroundSize: 'cover'} }>
                {
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


                }

            </div>
        </Container>
    );
};

export default Home;