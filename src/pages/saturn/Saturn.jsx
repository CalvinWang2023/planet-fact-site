import PlanetSection from '../../components/planetSection/PlanetSection';
import saturnImg from '../../assets/planet-saturn.svg';
import saturnInternal from '../../assets/planet-saturn-internal.svg';
import saturnGeology from '../../assets/geology-saturn.png';

const Saturn = () => {
    return (
        <PlanetSection 
            imgPlanet={ saturnImg } 
            imgInternal={ saturnInternal } 
            imgGeology={ saturnGeology } 
            planet={ 5 }
        />
    ) 

}

export default Saturn