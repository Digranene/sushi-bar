import React from 'react';
import './App.css';
import {Appbar} from "./components/AppBar";
import {Baner} from "./components/Baner";
import {Slogan} from "./components/Slogan";
import {Cards} from "./components/Cards";
import {Footer} from "./components/Footer";


function App() {
    return (
        <>
            <Appbar/>
            <main>
                <Baner/>
                <Slogan/>
                <Cards/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
