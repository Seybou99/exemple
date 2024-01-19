import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Homepage from "./components/pages/Homepage";
import a_propos from "./components/pages/a-propos";
import choisir_alternance from "./components/pages/choisir-alternance";
import Layout from "./layout/Layout";
import Partenariat from "./components/pages/partenariat"
import Candidature from './components/pages/candidature';
import './App.css'
import Mention from './components/pages/Mention';
import Cards2 from './components/Cards2';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path={'/'} element={<Homepage />}></Route>
            <Route path={'a-propos'} element={a_propos}></Route>
            <Route path={'candidature'} element={<Candidature />}></Route>
            <Route path={'partenariat'} element={<Partenariat />}></Route>
            <Route path={'choisir-alternance'} element={choisir_alternance}></Route>
            <Route path={'mentions-legales'} element={<Mention/>}></Route>
            <Route path={'partenariat-la-bonne'} element={<Cards2/>}></Route>
            <Route path={'Footer'} element={<Footer2/>}></Route>
          </Routes>  
        </Layout>  
      </Router>
      <Footer />

    </div>
  );
}

export default App;
