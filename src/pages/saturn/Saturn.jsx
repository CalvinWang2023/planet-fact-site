import PlanetSection from '../../components/planetSection/PlanetSection';
import saturnImg from '../../assets/planet-saturn.svg';
import saturnInternal from '../../assets/planet-saturn-internal.svg';
import saturnGeology from '../../assets/geology-saturn.png';

const Saturn = ({ data }) => {
    if (data !== undefined) {
        return (
            <PlanetSection 
                data={ data } 
                imgPlanet={ saturnImg } 
                imgInternal={ saturnInternal } 
                imgGeology={ saturnGeology } 
                planet={ '5' }
            />
        ) 
    } 
    return null;
}

export default Saturn