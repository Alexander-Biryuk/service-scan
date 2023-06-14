import './App.css';
import Auth from './components/auth_page/Auth';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Query from './components/query_page/Query';
import Results from './components/result_page/Results';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='auth' element={<Auth />} />
        <Route path='query' element={<Query />} />
        <Route path='results' element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
