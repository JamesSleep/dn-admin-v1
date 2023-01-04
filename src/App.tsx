import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import Shop from "./components/pages/shop/Shop";
import Product from "./components/pages/product/Product";
import Maintenance from "./components/pages/maintenance/Maintenance";
import User from "./components/pages/user/User";
import Review from "./components/pages/review/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/user" element={<User />} />
              <Route path="/review" element={<Review />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
