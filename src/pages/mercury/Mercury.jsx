import PlanetSection from '../../components/planetSection/PlanetSection';
import mercuryImg from '../../assets/planet-mercury.svg';
import mercuryInternal from '../../assets/planet-mercury-internal.svg';
import mercuryGeology from '../../assets/geology-mercury.png';

const Mercury = () => {
    return (
        <PlanetSection 
            imgPlanet={ mercuryImg } 
            imgInternal={ mercuryInternal } 
            imgGeology={ mercuryGeology } 
            planet={ 0 }
        />
    ) 
}

export default Mercury