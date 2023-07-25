import { useEffect, useState } from 'react';
import PlanetWrapperDesktop from './planetWrapperDesktop/PlanetWrapperDesktop';
import PlanetWrapperMobile from './planetWrapperMobile/PlanetWrapperMobile';

const PlanetWrapper = ({ data, imgPlanet, imgInternal, imgGeology, planet }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [window.innerWidth]);

    return (
        innerWidth > 810 ? 
                        <PlanetWrapperDesktop data={ data } 
                                              imgPlanet={ imgPlanet } 
                                              imgInternal={ imgInternal } 
                                              imgGeology={ imgGeology }
                                              planet={ planet } /> 
                        :   
                        <PlanetWrapperMobile data={ data } 
                                             imgPlanet={ imgPlanet } 
                                             imgInternal={ imgInternal } 
                                             imgGeology={ imgGeology }
                                             planet={ planet } />
    )
}

export default PlanetWrapper