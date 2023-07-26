import './HeaderDesktop.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderDesktop = () => {
	const [clicked, setClicked] = useState('0');

	const linkStyle = {
		textDecoration: 'none' 
	}

	const mercuryBorderColor = { backgroundColor: 'var(--mercury-color)' };
	const venusBorderColor = { backgroundColor: 'var(--venus-color)' };
	const earthBorderColor = { backgroundColor: 'var(--earth-color)' };
	const marsBorderColor = { backgroundColor: 'var(--mars-color)' };
	const jupiterBorderColor = { backgroundColor: 'var(--jupiter-color)' };
	const saturnBorderColor = { backgroundColor: 'var(--saturn-color)' };
	const uranusBorderColor = { backgroundColor: 'var(--uranus-color)' };
	const neptuneBorderColor = { backgroundColor: 'var(--neptune-color)' };

    return (
        <div className="header-desktop">
            <div className="site-icon">
                <h1>The Planets</h1>
            </div>
            <div className="menu-list">
				<Link to={ `/Mercury`} style={ linkStyle }>
					<div className="planet mercury-planet">
						<div className={ clicked === '0' ? 'hl clicked' : 'hl' } style={ mercuryBorderColor }></div>
						<button id={ clicked === '0' ? 'planet-clicked' : 'mercury' } onClick={ () => setClicked('0') }>Mercury</button>
					</div>
				</Link>
				<Link to={ `/Venus`} style={ linkStyle }>
					<div className="planet venus-planet">
						<div className={ clicked === '1' ? 'hl clicked' : 'hl' } style={ venusBorderColor }></div>
						<button id={ clicked === '1' ? 'planet-clicked' : 'venus' } onClick={ () => setClicked('1') }>Venus</button>
					</div>
				</Link>
				<Link to={ `/Earth`} style={ linkStyle }>
					<div className="planet earth-planet">
						<div className={ clicked === '2' ? 'hl clicked' : 'hl' } style={ earthBorderColor }></div>
						<button id={ clicked === '2' ? 'planet-clicked' : 'earth' } onClick={ () => setClicked('2') }>Earth</button>
					</div>
				</Link>

				<Link to={ `/Mars`} style={ linkStyle }>
					<div className="planet mars-planet">
						<div className={ clicked === '3' ? 'hl clicked' : 'hl' } style={ marsBorderColor }></div>
						<button id={ clicked === '3' ? 'planet-clicked' : 'mars' } onClick={ () => setClicked('3') }>Mars</button>
					</div>
				</Link>

				<Link to={ `/Jupiter`} style={ linkStyle }>
					<div className="planet jupiter-planet">
						<div className={ clicked === '4' ? 'hl clicked' : 'hl' } style={ jupiterBorderColor }></div>
						<button id={ clicked === '4' ? 'planet-clicked' : 'jupiter' } onClick={ () => setClicked('4') }>Jupiter</button>
					</div>
				</Link>

				<Link to={ `/Saturn`} style={ linkStyle }>
					<div className="planet saturn-planet">
						<div className={ clicked === '5' ? 'hl clicked' : 'hl' } style={ saturnBorderColor }></div>
						<button id={ clicked === '5' ? 'planet-clicked' : 'saturn' } onClick={ () => setClicked('5') }>Saturn</button>
					</div>
				</Link>

				<Link to={ `/Uranus`} style={ linkStyle }>
					<div className="planet uranus-planet">
						<div className={ clicked === '6' ? 'hl clicked' : 'hl' } style={ uranusBorderColor }></div>
						<button id={ clicked === '6' ? 'planet-clicked' : 'uranus' } onClick={ () => setClicked('6') }>Uranus</button>
					</div>
				</Link>

				<Link to={ `/Neptune`} style={ linkStyle }>
					<div className="planet neptune-planet">
						<div className={ clicked === '7' ? 'hl clicked' : 'hl' } style={ neptuneBorderColor }></div>
						<button id={ clicked === '7' ? 'planet-clicked' : 'neptune' } onClick={ () => setClicked('7') }>Neptune</button>
					</div>      
				</Link>
         
            </div>
        </div>
    )
}

export default HeaderDesktop;