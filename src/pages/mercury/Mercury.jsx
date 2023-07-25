import PlanetSection from '../../components/planetSection/PlanetSection';
import mercuryImg from '../../assets/planet-mercury.svg';
import mercuryInternal from '../../assets/planet-mercury-internal.svg';
import mercuryGeology from '../../assets/geology-mercury.png';

const Mercury = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetSection 
                data={ data } 
                imgPlanet={ mercuryImg } 
                imgInternal={ mercuryInternal } 
                imgGeology={ mercuryGeology } 
                planet={ '0' }
            />
        ) 
    } 
    return null;
}

export default Mercury