import PlanetWrapper from '../../wrapper/PlanetWrapper';
import jupiterImg from '../../assets/planet-jupiter.svg';
import jupiterInternal from '../../assets/planet-jupiter-internal.svg';
import jupiterGeology from '../../assets/geology-jupiter.png';

const Jupiter = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetWrapper 
                data={ data } 
                imgPlanet={ jupiterImg } 
                imgInternal={ jupiterInternal } 
                imgGeology={ jupiterGeology } 
                planet={ '4' }
            />
        ) 
    } 
    return null;
}

export default Jupiter