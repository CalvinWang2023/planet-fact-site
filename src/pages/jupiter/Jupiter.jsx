import PlanetSection from '../../components/planetSection/PlanetSection';
import jupiterImg from '../../assets/planet-jupiter.svg';
import jupiterInternal from '../../assets/planet-jupiter-internal.svg';
import jupiterGeology from '../../assets/geology-jupiter.png';

const Jupiter = () => {

    return (
        <PlanetSection  
            imgPlanet={ jupiterImg } 
            imgInternal={ jupiterInternal } 
            imgGeology={ jupiterGeology } 
            planet={ 4 }
        />
    ) 


}

export default Jupiter