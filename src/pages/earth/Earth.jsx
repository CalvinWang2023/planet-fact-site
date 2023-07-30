import PlanetSection from '../../components/planetSection/PlanetSection';
import earthImg from '../../assets/planet-earth.svg';
import earthInternal from '../../assets/planet-earth-internal.svg';
import earthGeology from '../../assets/geology-earth.png';

const Earth = () => {
    return (
        <PlanetSection 
            imgPlanet={ earthImg } 
            imgInternal={ earthInternal } 
            imgGeology={ earthGeology } 
            planet={ 2 }
        />   
    )
}

export default Earth