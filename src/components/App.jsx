// import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import { Suspense, lazy } from 'react';

// import Hero from './Hero/Hero';
// import About from './About/About';
import NavBar from './NavBar/NavBar';
// import Activity from './Activity/Activity';
// import Management from './Management/Management';
// import Structure from './Structure/Structure';
// import Vacancies from './Vacancies/Vacancies';
// import Agreement from './Agreement/Agreement';
// import Population from './Population/Population';
// import Rates from './Rates/Rates';
// import Information from './Information/Information';
// import News from './News/News';
// import Contacts from './Contacts/Contacts';
import { CircularProgress } from '@mui/material';

const Hero = lazy(() => import('./Hero/Hero'));
const About = lazy(() => import('./About/About'));
// const NavBar = lazy(() => import('./NavBar/NavBar'));
const Activity = lazy(() => import('./Activity/Activity'));
const Management = lazy(() => import('./Management/Management'));
const Structure = lazy(() => import('./Structure/Structure'));
const Vacancies = lazy(() => import('./Vacancies/Vacancies'));
const Agreement = lazy(() => import('./Agreement/Agreement'));
const Population = lazy(() => import('./Population/Population'));
const Rates = lazy(() => import('./Rates/Rates'));
const Information = lazy(() => import('./Information/Information'));
const News = lazy(() => import('./News/News'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

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
      {/* <CircularProgress */}
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline /> */}
      <Suspense fallback={<CircularProgress />}>
        <NavBar />
        <Routes>
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
        </Routes>
      </Suspense>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
