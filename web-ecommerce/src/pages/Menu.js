import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';



export default function MenuPage() {
    return (
        <>
            <Header isMenu />
            <Menu />
            <Footer />
        </>
    )
}