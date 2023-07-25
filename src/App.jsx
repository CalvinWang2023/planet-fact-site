import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Layout from './Layout';
import Header from './components/header/Header';
import data from './data.json';

import Mercury from './pages/mercury/Mercury';
import Venus from './pages/venus/Venus';
import Earth from './pages/earth/Earth';
import Mars from './pages/mars/Mars';
import Jupiter from './pages/jupiter/Jupiter';
import Saturn from './pages/saturn/Saturn';
import Uranus from './pages/uranus/Uranus';
import Neptune from './pages/neptune/Neptune';


function App() {
	const [dataList, setDataList] = useState([]);
	const navigate = useNavigate();

	const formatData = data.map((planetData) => {
		return {
		  	name: planetData.name,
		  	ov_content: planetData.overview.content,
		  	ov_source: planetData.overview.source,
		  	sd_content: planetData.structure.content,
		  	sd_source: planetData.structure.source,
		  	gy_content: planetData.geology.content,
		  	gy_source: planetData.geology.source,
			rotation: planetData.rotation,
			revolution: planetData.revolution,
			radius: planetData.radius,
			temperature: planetData.temperature,
			img_planet: planetData.images.planet,
			img_internal: planetData.images.internal,
			img_geology: planetData.images.geology,
		};
	});

	useEffect(() => {
		setDataList(formatData);
		navigate('/Mercury');
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes path='/' element={ <Layout /> }> 	
				<Route path='/Mercury' element={ <Mercury data={ dataList[0] } /> } />	
				<Route path='/Venus' element={ <Venus data={ dataList[1] } /> } />	
				<Route path='/Earth' element={ <Earth data={ dataList[2] } /> } />	
				<Route path='/Mars' element={ <Mars data={ dataList[3] } /> } />	
				<Route path='/Jupiter' element={ <Jupiter data={ dataList[4] } /> } />	
				<Route path='/Saturn' element={ <Saturn data={ dataList[5] } /> } />	
				<Route path='/Uranus' element={ <Uranus data={ dataList[6] } /> } />	
				<Route path='/Neptune' element={ <Neptune data={ dataList[7] } /> } />						
			</Routes>
		</div>
	);
}

export default App;
