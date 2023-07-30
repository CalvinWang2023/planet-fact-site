import PlanetSection from '../../components/planetSection/PlanetSection';
import neptuneImg from '../../assets/planet-neptune.svg';
import neptuneInternal from '../../assets/planet-neptune-internal.svg';
import neptuneGeology from '../../assets/geology-neptune.png';

const Neptune = () => {
    return (
        <PlanetSection 
            imgPlanet={ neptuneImg } 
            imgInternal={ neptuneInternal } 
            imgGeology={ neptuneGeology } 
            planet={ 7 }
        />
    ) 
}

export default Neptune