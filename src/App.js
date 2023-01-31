import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import PackagesScreen from "./screens/PackagesScreen";
import PackageDetailsScreen from "./screens/PackageDetailsScreen";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/services' element={<ServicesScreen/>}/>
                <Route path='/projects' element={<ProjectsScreen/>}/>
                <Route path='/contact' element={<ContactScreen/>}/>
                <Route path='/package' element={<PackagesScreen/>}/>
                <Route path='/package/:place' element={<PackageDetailsScreen/>}/>
                <Route path='/package/:place/:packageName' element={<PackageDetailsScreen/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
