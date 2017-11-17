import React from 'react';
import Header from './components/core/Header.jsx';
import Footer from './components/core/Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
};