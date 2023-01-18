import React from 'react';
import MainLayout from './components/layouts/MainLayout'; 
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/pages/home/Home';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='*' element={<p>error404</p>} />
        </Routes>
      </MainLayout>
    </Router>

  )
}

export default App;