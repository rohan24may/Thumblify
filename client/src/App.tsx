import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import YtPreview from "./pages/YtPreview";
import MyGeneration from "./pages/MyGeneration";
import Generate from "./pages/Generate";
import Login from "./components/Login";
import {Toaster} from 'react-hot-toast';
import { useEffect } from "react";
import Community from "./pages/Community";
import About from "./pages/About";




export default function App() {
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    return (
        <>
            <Toaster />
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/generate/:id" element={<Generate />} />
                <Route path="/my-generation" element={<MyGeneration />} />
                <Route path="/preview" element={<YtPreview />} />
                <Route path="/login" element={<Login />} />
                <Route path="/yt-preview" element={<YtPreview />} />
                <Route path="/community" element={<Community />} />
                <Route path="/about" element={<About />} />


            </Routes>
            <Footer />
        </>
    );
}