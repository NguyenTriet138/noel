import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routers/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";
import React from "react";
function App() {
    return (
        <div className="App h-100">

            <Image hidden src={`${process.env.PUBLIC_URL}/christmas-background-illustrator.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/bg-my-wish.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/mat_na.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/bong_tai.png`}/>
            <Image hidden src={`${process.env.PUBLIC_URL}/loading.gif`}/>

            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.element;
                    console.log(Page);
                    console.log(route.path);
                    return <Route key={index} path={route.path} element={
                        <Page/>
                    }/>
                })}
            </Routes>
        </div>
    );
}

export default App;
