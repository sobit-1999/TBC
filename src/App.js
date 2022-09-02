import './App.css';
import Container from './components/container/Container';
import Kreditlar from './components/container/Kreditlar';
import Header from './components/header/Header';


function App() {


  return (
    <div className="App">
       <Header />
       {/* <Container /> */}
       <div className='container'>
        <Kreditlar />
       </div>
    </div>
  );
}

export default App;
