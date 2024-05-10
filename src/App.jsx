
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/Header';
import Banner from './components/Bannner';
import About from './components/About';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Quotes from './components/Quotes';
import Service from './components/Service';
import Contact from './components/contact';
import Footer from './components/footer';




function App() {


  

  return (
  <div>
<Header></Header>
<Banner></Banner>
<About></About>
<Stats></Stats>
<Portfolio></Portfolio>
<Quotes></Quotes>
<Service></Service>
<Contact></Contact>
<Footer/>
   </div>


  )
}

export default App
