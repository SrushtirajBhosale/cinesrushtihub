import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import { Container } from '@mui/material';

function App() {
  return (
    <HashRouter>
      <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' element={<Trending />} />
              <Route path='/movies' exact element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>
      < SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;
