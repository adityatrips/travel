import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import ProjectsScreen from './screens/ProjectsScreen';
import PricingScreen from './screens/PricingScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/services' element={<ServicesScreen />} />
        <Route path='/projects' element={<ProjectsScreen />} />
        <Route path='/pricing' element={<PricingScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
