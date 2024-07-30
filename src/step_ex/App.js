import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Navigation from './components/Navigation';


function App() {

  // Router 컴포넌트 사용
  // Navigation 배치, Route 컴포넌트로 Home, About, Detail 추가
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/YS_JAVA01_REACT_MOVIE' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;