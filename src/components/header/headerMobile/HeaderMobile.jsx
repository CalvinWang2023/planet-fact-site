import { useState } from 'react';
import { Link } from 'react-router-dom';

import './HeaderMobile.css';

import hamburger from '../../../assets/icon-hamburger.svg';
import close from '../../../assets/close.svg';
import gotoArrow from '../../../assets/chevron_right.svg';

import mercury from '../../../assets/planet-mercury.svg';
import venus from '../../../assets/planet-venus.svg';
import earth from '../../../assets/planet-earth.svg';
import mars from '../../../assets/planet-mars.svg';
import jupiter from '../../../assets/planet-jupiter.svg';
import saturn from '../../../assets/planet-saturn.svg';
import uranus from '../../../assets/planet-uranus.svg';
import neptune from '../../../assets/planet-neptune.svg';

const HeaderMobile = () => {
    const [expand, setExpand] = useState(false);

    const visibility = {
        display: expand ? 'flex' : 'none'
    };

    const linkStyle = {
        textDecoration: 'none'
    }

    return (
        <div className="header-mobile">
            <div className="site-icon">
                <h1>The Planets</h1>
                <img
                    src={expand ? close : hamburger}
                    alt="expand"
                    onClick={() => setExpand(!expand)}
                />
            </div>
            <div className="menu-list" style={visibility}>

                <div className="planet-container">
                    <Link 
                        to={`/Mercury`} 
                        style={linkStyle} 
                        className='link' 
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={mercury} alt="Mercury img" />
                            <p>Mercury</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Venus`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={venus} alt="Venus img" />
                            <p className="venus">Venus</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Earth`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={earth} alt="Earth img" />
                            <p className="earth">Earth</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Mars`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={mars} alt="Mars img" />
                            <p className="mars">Mars</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Jupiter`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={jupiter} alt="Jupiter img" />
                            <p className="jupiter">Jupiter</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Saturn`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={saturn} alt="Saturn img" />
                            <p className="saturn">Saturn</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Uranus`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={uranus} alt="Uranus img" />
                            <p className="uranus">Uranus</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>

                <div className="planet-container">
                    <Link 
                        to={`/Neptune`} 
                        style={linkStyle} 
                        className='link'
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="planet">
                            <img src={neptune} alt="Neptune img" />
                            <p className="neptune">Neptune</p>
                        </div>

                        <img src={gotoArrow} alt="gotoArrow img" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;