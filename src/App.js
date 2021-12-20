import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {HashRouter} from "react-router-dom";




function App() {
  return (
    <div className="App">
     <HashRouter>
        <Header/>
        <Main/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
