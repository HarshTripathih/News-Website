import './App.css';
import News from './Component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
  
      <Router>
          <Header/>
        <Routes>
          <Route exact path='/' element={< News key="general" pageSize={9} country="in" category="general" />} />
          <Route exact path='/trending' element={< News key="technology" pageSize={9} country="in" category="technology" />} />
          <Route exact path='/business' element={< News key="business" pageSize={9} country="in" category="business" />} />
          <Route exact path='/entertainment' element={< News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
          <Route exact path='/general' element={< News key="general" pageSize={9} country="in" category="general" />} />
          <Route exact path='/health' element={< News key="health" pageSize={9} country="in" category="health" />} />
          <Route exact path='/sports' element={< News key="sports" pageSize={9} country="in" category="sports" />} />
          <Route exact path='/science' element={< News key="science" pageSize={9} country="in" category="science" />} />
          <Route exact path='/technology' element={< News key="technology" pageSize={9} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
