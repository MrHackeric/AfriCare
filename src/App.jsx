import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Midwives from './pages/Midwives';
import Emergencies from './pages/Emergencies';
import LiveChartArea from './pages/LiveChartArea';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/MidwivesTraining" element={<Midwives />} />
        <Route exact path="/Emergencies" element={<Emergencies />} />
        <Route exact path="/ChartArea" element={<LiveChartArea />} />      
      </Routes>
    </>
  );
}

export default App;
