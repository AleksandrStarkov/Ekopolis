// import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import Hero from './Hero/Hero';
import About from './About/About';
import NavBar from './NavBar/NavBar';
import Activity from './Activity/Activity';
import Management from './Management/Management';
import Structure from './Structure/Structure';
import Vacancies from './Vacancies/Vacancies';
import Agreement from './Agreement/Agreement';
import Population from './Population/Population';
import Rates from './Rates/Rates';
import Information from './Information/Information';
import News from './News/News';
import Contacts from './Contacts/Contacts';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#ffffff',
//     },
//   },
// });

// color="primary" enableColorOnDark

function App() {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      {/* <CssBaseline /> */}
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Hero />}> */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/management" element={<Management />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/population" element={<Population />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* </Route> */}
      </Routes>

      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
