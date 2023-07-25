import { useState } from 'react';
import iconSource from '../../assets/icon-source.svg';
import './PlanetWrapperMobile.css';

const PlanetWrapperMobile = ({ data, imgPlanet, imgInternal, imgGeology, planet }) => {
    const [show, setShow] = useState('0');

    const geologyImg = 
    show == '2' 
        ? <img src={ imgGeology }
               className='geology-img'
          /> 
        : ''

    const buttonStyle = 
        planet === '0' 
            ? { backgroundColor: 'var(--mercury-color)' } 
            : planet === '1' 
            ? { backgroundColor: 'var(--venus-color)' }
            : planet === '2' 
            ? { backgroundColor: 'var(--earth-color)' }
            : planet === '3' 
            ? { backgroundColor: 'var(--mars-color)' }
            : planet === '4' 
            ? { backgroundColor: 'var(--jupiter-color)' }
            : planet === '5' 
            ? { backgroundColor: 'var(--saturn-color)' }
            : planet === '6' 
            ? { backgroundColor: 'var(--uranus-color)' }
            : { backgroundColor: 'var(--neptune-color)' };
    
    const planetImage =
        show === '0'
            ? imgPlanet
            : show === '1'
            ? imgInternal
            : imgPlanet;

    const content =        
        show === '0' ? 
            data.ov_content : show === '1' ?
            data.sd_content : data.gy_content;

    const source =       
        show === '0' ? 
            data.ov_source : show === '1' ?
            data.sd_source : data.gy_source;

    return (
        <div className="planet-page-mobile">
            <div className="show-choices">
                <button
                    id="overview"
                    onClick={() => setShow('0')}
                >
                    <p className='title'>Overview</p>
                    <div className={ show === '0' ? 'hl clicked' : 'hl' } style={show === '0' ? buttonStyle : null}></div>
                </button>
                <button
                    id="structure"
                    onClick={() => setShow('1')}            
                >
                    <p className="title">Structure</p>
                    <div className={ show === '1' ? 'hl clicked' : 'hl' } style={show === '1' ? buttonStyle : null}></div>
                </button>
                <button
                    id="geology"
                    onClick={() => setShow('2')}
                >
                    <p className="title">Surface</p>
                    <div className={ show === '2' ? 'hl clicked' : 'hl' } style={show === '2' ? buttonStyle : null}></div>
                </button>
            </div>

            <div className="show-wrapper">
                <div className="planet-container">
                    <img src={ planetImage } alt="planet img" className='planet-img' />
                    { geologyImg }
                </div>
                <div className="planet-name">
                    <h1>{ data.name }</h1>
                </div>
                <div className="texts">
                    <div className="planet-content">
                        <p>{ content }</p>
                    </div>
                    <div className="planet-source">
                        <p>Source: </p>
                        <a href={ source } target='_blank'>
                            <p>Wikipedia</p>    
                        </a>
                        <a href={ source } target='_blank'>                       
                            <img src={ iconSource } alt="new tab img" />
                        </a>  
                    </div>  
                </div>
            </div>
            <div className="stats-wrapper">
                <div className="stats">
                    <p>Rotation Time</p>
                    <h1>{ data.rotation }</h1>
                </div>
                <div className="stats">
                    <p>Revolution Time</p>
                    <h1>{ data.revolution }</h1>
                </div>
                <div className="stats">
                    <p>Radius Time</p>
                    <h1>{ data.radius }</h1>
                </div>
                <div className="stats">
                    <p>Temperature Time</p>
                    <h1>{ data.temperature }</h1>
                </div>
            </div>
        </div>
    )
}

export default PlanetWrapperMobile