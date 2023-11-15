import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNav from "./components/headerNav";
import HeaderMain from './components/headerMain';
import Footer from './components/footer';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import Blog from './components/blog';
import Contact from './components/contact';


function App() {
  return (
    <>
    <HeaderNav/>
    <HeaderMain/>
    <AboutUs/>
    <Services/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
