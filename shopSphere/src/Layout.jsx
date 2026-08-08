import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, Footer, Announcement} from './Components/Layout'
import Home from './Pages/Home/Home'

export default function Layout(){
    return (
        <>
            <Announcement/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}