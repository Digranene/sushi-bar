import React from 'react';
import './App.css';
import {Appbar} from "./components/AppBar";
import {Banner} from "./components/Banner";
import {Slogan} from "./components/Slogan";
import {Cards} from "./components/Cards";
import {Footer} from "./components/Footer";
import {Delivery} from "./components/Delivery";




function App() {
    return (
        <div>
            {/*<Appbar/>*/}
            <main>
                <Banner/>
                <Slogan/>
                <Cards />
                <Delivery/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
