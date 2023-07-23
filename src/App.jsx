import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes path='/' element={ <Layout /> }> 

			</Routes>
		</div>
	);
}

export default App;
