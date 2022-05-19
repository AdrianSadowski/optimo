import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/views/Homepage';
import { MainLayout } from './components/views/MainLayout';
import './styles/bootstrap.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='*' element={<Homepage/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
