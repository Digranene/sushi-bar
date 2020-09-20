import React from 'react';
import './App.css';
import {Appbar} from "./components/AppBar";
import {Banner} from "./components/Banner";
import {Slogan} from "./components/Slogan";
import {Cards} from "./components/Cards";
import {Footer} from "./components/Footer";
import {Delivery} from "./components/Delivery";
import {BrowserRouter} from "react-router-dom";
import {PopUp} from "./components/PopUp/PopUpSushi";
import {Route} from "react-router-dom";
import {PopUpSet} from "./components/PopUp/PopUpSushiset";
import {PopUpWok} from "./components/PopUp/PopUpWok";


function App() {
    return (
        <BrowserRouter>
            <div>
                {/*<Appbar/>*/}
                <Banner/>
                <Slogan/>
                <main>
                    <Cards/>
                    <Delivery/>
                    <Footer/>
                    <Route exact path={'/popup/:id'} render={() => <PopUp/>}/>
                    <Route exact path={'/popup/set/:id'} render={() => <PopUpSet/>}/>
                    <Route exact path={'/popup/wok/:id'} render={() => <PopUpWok/>}/>
                </main>
            </div>

        </BrowserRouter>
    );
}

export default App;
