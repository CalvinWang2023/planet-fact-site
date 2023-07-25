import PlanetSection from '../../components/planetSection/PlanetSection';
import marsImg from '../../assets/planet-mars.svg';
import marsInternal from '../../assets/planet-mars-internal.svg';
import marsGeology from '../../assets/geology-mars.png';

const Mars = ({ data }) => {
    console.log(data);
    if (data !== undefined) {
        return (
            <PlanetSection 
                data={ data } 
                imgPlanet={ marsImg } 
                imgInternal={ marsInternal } 
                imgGeology={ marsGeology } 
                planet={ '3' }
            />
        ) 
    } 
    return null;
}

export default Mars