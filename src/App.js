import './App.css';
import Depozitlar from './components/container/depozitlar/Depozitlar';
import Footer from './components/footer/Footer';
// import Kreditlar from './components/container/Kreditlar';
// import Shartlar from './components/container/shartlar/Shartlar';
// import TBCAvtokridit from './components/container/TBCAvtokredit';
import Header from './components/header/Header';


function App() {


  return (
    <div className="App">
       <Header />
       <div className='contend'>
        <Depozitlar />
       </div>
       <Footer />
    </div>
  );
}

export default App;
