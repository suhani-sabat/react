import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header, Footer, Home, About} from './components'

export default function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}