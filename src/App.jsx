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
import LiveChartArea from './pages/LiveChartArea';
import Emergencies from './pages/Emergencies';

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
        <Route exact path="/chatArea" element={<LiveChartArea />} />
        <Route exact path="/Emergencies" element={<Emergencies />} />
      </Routes>
    </>
  );
}

export default App;
