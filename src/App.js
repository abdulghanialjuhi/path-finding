import './App.scss';
import Main from './components/main';
import NavBar from './components/navbar/NavBar'
import globalstate from './use-context/useGlobal';
import Context from './use-context/Context'
import Footer from './components/footer/Footer'

function App() {

  const store = globalstate()
  return (
    <div className="App">
      <Context.Provider value={store}>
        <NavBar />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
