import PlanetWrapper from '../../wrapper/PlanetWrapper';
import uranusImg from '../../assets/planet-uranus.svg';
import uranusInternal from '../../assets/planet-uranus-internal.svg';
import uranusGeology from '../../assets/geology-uranus.png';

const Uranus = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetWrapper 
                data={ data } 
                imgPlanet={ uranusImg } 
                imgInternal={ uranusInternal } 
                imgGeology={ uranusGeology } 
                planet={ '6' }
            />
        ) 
    } 
    return null;
}

export default Uranus