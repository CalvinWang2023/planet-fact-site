import PlanetSection from '../../components/planetSection/PlanetSection';
import venusImg from '../../assets/planet-venus.svg';
import venusInternal from '../../assets/planet-venus-internal.svg';
import venusGeology from '../../assets/geology-venus.png';

const Venus = () => {
    return (
        <PlanetSection 
            imgPlanet={ venusImg } 
            imgInternal={ venusInternal } 
            imgGeology={ venusGeology } 
            planet={ 1 }
        />
    ) 
}

export default Venus