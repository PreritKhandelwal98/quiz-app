import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/result' element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
