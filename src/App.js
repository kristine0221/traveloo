import React from 'react'
//import { Switch, Route } from 'react-router-dom'


//FontAwesome Icons
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

//library.add(fab, faCheckSquare, faCoffee)

// import NavBar from './components/Navbar/index';
// import Banner from './components/Banner/index';
// import Reviews from './components/Reviews/index';
import Contents from './core/Contents/index';
import Footer from './core/Footer/index';
import Header from './core/Header/index';


//import './AppStyle.scss';

const App = () => {
    return (
        <div className="main">
            <Header />
            <Contents />
            <Footer />
        </div>
    )
}


export default App

