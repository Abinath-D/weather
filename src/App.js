import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import FetchWeather from './Pages/FetchWeather';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path='*' element={<LoginPage/>}></Route>
          <Route path='/weather' element={<FetchWeather/>} ></Route>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
