import { useState } from 'react';
import iconSource from '../../assets/icon-source.svg';
import './PlanetWrapperDesktop.css';

const PlanetWrapperDesktop = ({ data, imgPlanet, imgInternal, imgGeology, planet }) => {
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
        <div className="planet-page-desktop">
            <div className="show-wrapper">
                <div className="wrapper-left">
                    <img src={ planetImage } alt="planet img" className='planet-img' />
                    { geologyImg }
                </div>
                <div className="wrapper-right">
                    <div className="texts">
                        <div className="planet-name">
                            <h1>{ data.name }</h1>
                        </div>
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

                    <div className="show-choices">
                        <button 
                            id="overview" 
                            onClick={ () => setShow('0') }
                            style={ show === '0' ? buttonStyle : null }
                        >
                            <p className='number'>01</p>
                            <p className='title'>Overview</p>
                        </button>
                        <button 
                            id="structure" 
                            onClick={ () => setShow('1') }
                            style={ show === '1' ? buttonStyle : null }
                        >
                            <p className='number'>02</p>
                            <p className='title'>Internal Structure</p>
                        </button>
                        <button 
                            id="geology"
                            onClick={ () => setShow('2') }
                            style={ show === '2' ? buttonStyle : null }
                        >
                            <p className='number'>03</p>
                            <p className='title'>Surface Geology</p>
                        </button>
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

export default PlanetWrapperDesktop