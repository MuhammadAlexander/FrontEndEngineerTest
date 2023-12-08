import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import LoginPages from './pages/loginPages.jsx';
import RegisterPages from './pages/registerpages.jsx';
import HomePages from './pages/homePages.jsx';
import Header from './components/Fragments/Header.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Footer from './components/Fragments/Footer.jsx';

const Main = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/product/:productId" element={<ProductDetail />}/>
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);