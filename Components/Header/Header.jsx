import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className='' style={{backgroundImage: `url(/trillgraphix/social.jpg)`, height: '550px'}}>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;