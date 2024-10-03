import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home'; 

import Product from './pages/Product';  // Dynamic route for product 

import User from './pages/User';        // Dynamic route for user 

 

function AppRouter() { 

  return ( 

    <Router> 

      <Routes> 

        <Route path="/" element={<Home />} /> 

        {/* Dynamic Route for product */} 

        <Route path="/product/:productId" element={<Product />} /> 

        {/* Dynamic Route for user */} 

        <Route path="/user/:userId" element={<User />} /> 

      </Routes> 

    </Router> 

  ); 

} 

 

export default AppRouter; 