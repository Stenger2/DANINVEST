import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../AllPages/Home";
import AboutUs from "../AllPages/AboutUs";


const Content=()=>(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
)

export default Content;