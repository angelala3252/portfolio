import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './components/Layout';
import Photography from './pages/Photography';
import Projects from './pages/Projects';

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='photography' element={<Photography />}/>
      </Route>
    </Routes>
  </HashRouter>;
}

export default App;
