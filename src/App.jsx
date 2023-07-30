import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './Layout';
import Header from './components/header/Header';

import Mercury from './pages/mercury/Mercury';
import Venus from './pages/venus/Venus';
import Earth from './pages/earth/Earth';
import Mars from './pages/mars/Mars';
import Jupiter from './pages/jupiter/Jupiter';
import Saturn from './pages/saturn/Saturn';
import Uranus from './pages/uranus/Uranus';
import Neptune from './pages/neptune/Neptune';


function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/Mercury');
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes path='/' element={ <Layout /> }> 	
				<Route path='/Mercury' element={ <Mercury /> } />	
				<Route path='/Venus' element={ <Venus /> } />	
				<Route path='/Earth' element={ <Earth /> } />	
				<Route path='/Mars' element={ <Mars /> } />	
				<Route path='/Jupiter' element={ <Jupiter /> } />	
				<Route path='/Saturn' element={ <Saturn /> } />	
				<Route path='/Uranus' element={ <Uranus /> } />	
				<Route path='/Neptune' element={ <Neptune /> } />						
			</Routes>
		</div>
	);
}

export default App;
