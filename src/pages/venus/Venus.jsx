import PlanetWrapper from '../../wrapper/PlanetWrapper';
import venusImg from '../../assets/planet-venus.svg';
import venusInternal from '../../assets/planet-venus-internal.svg';
import venusGeology from '../../assets/geology-venus.png';

const Venus = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetWrapper 
                data={ data } 
                imgPlanet={ venusImg } 
                imgInternal={ venusInternal } 
                imgGeology={ venusGeology } 
                planet={ '1' }
            />
        ) 
    } 
    return null;
}

export default Venus