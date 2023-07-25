import PlanetSection from '../../components/planetSection/PlanetSection';
import neptuneImg from '../../assets/planet-neptune.svg';
import neptuneInternal from '../../assets/planet-neptune-internal.svg';
import neptuneGeology from '../../assets/geology-neptune.png';

const Neptune = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetSection 
                data={ data } 
                imgPlanet={ neptuneImg } 
                imgInternal={ neptuneInternal } 
                imgGeology={ neptuneGeology } 
                planet={ '7' }
            />
        ) 
    } 
    return null;
}

export default Neptune