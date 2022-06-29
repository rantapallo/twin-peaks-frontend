import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Nav from './components/nav/Nav';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
