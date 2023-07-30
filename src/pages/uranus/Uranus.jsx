import PlanetSection from '../../components/planetSection/PlanetSection';
import uranusImg from '../../assets/planet-uranus.svg';
import uranusInternal from '../../assets/planet-uranus-internal.svg';
import uranusGeology from '../../assets/geology-uranus.png';

const Uranus = () => {
    return (
        <PlanetSection 
            imgPlanet={ uranusImg } 
            imgInternal={ uranusInternal } 
            imgGeology={ uranusGeology } 
            planet={ 6 }
        />
    ) 
}

export default Uranus