import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';


const headerStyle = {
    backgroundImage: `url(/trillgraphix/social.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '550px'

}

const Header = () => {
    return (
        <div className='' style={headerStyle}>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;