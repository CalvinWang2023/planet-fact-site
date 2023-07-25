import { useEffect, useState } from 'react';
import PlanetSectionDesktop from './planetSectionDesktop/PlanetSectionDesktop';
import PlanetSectionMobile from './planetSectionMobile/PlanetSectionMobile';

const PlanetWrapper = ({ data, imgPlanet, imgInternal, imgGeology, planet }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [window.innerWidth]);

    return (
        innerWidth > 810 ? 
                        <PlanetSectionDesktop data={ data } 
                                              imgPlanet={ imgPlanet } 
                                              imgInternal={ imgInternal } 
                                              imgGeology={ imgGeology }
                                              planet={ planet } /> 
                        :   
                        <PlanetSectionMobile data={ data } 
                                             imgPlanet={ imgPlanet } 
                                             imgInternal={ imgInternal } 
                                             imgGeology={ imgGeology }
                                             planet={ planet } />
    )
}

export default PlanetWrapper