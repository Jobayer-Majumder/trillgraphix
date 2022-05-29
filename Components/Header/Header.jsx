import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';


const headerStyle = {
    backgroundImage: `url(/trillgraphix/social.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '540px',
    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)"

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