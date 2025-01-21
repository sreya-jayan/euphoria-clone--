import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/screens/includes/Header';
import Footer from './components/screens/Footer';

import Dresses from './components/screens/Dresses';
import Dress from './components/screens/Dress';
import Arrivals from './components/screens/Arrivals';
import Fashion from './components/screens/Fashion';
import CategoriesMen from './components/screens/CategoriesMen';
import CategoriesWomen from './components/screens/CategoriesWomen';
import Brands from './components/screens/Brands';
import LimeLight from './components/screens/LimeLight';
import Feedback from './components/screens/Feedback';
import ProductPage from './components/screens/ProductPage';
import ProductDescription from './components/screens/ProductDescription';
import SimilarProduct from './components/screens/SimilarProduct';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="//euphoria-clone--"element={
            <div>
              <Dresses />
              <Dress />
              <Arrivals />
              <Fashion />
              <CategoriesMen />
              <CategoriesWomen />
              <Brands />
              <LimeLight />
              <Feedback />
             
            </div>
          }
        />

       
       

       
        <Route path="product/:id" element={
          <div>
            <ProductPage />
            <ProductDescription />
            <SimilarProduct/>
          </div>
        }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;