import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Component/Content/MainContainer';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className='qq'>
      <div className="App" class='container'>
        <header className="App-header">
          <Header />
        </header>
        <div className='App-main'>
          <MainContainer />
        </div>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
