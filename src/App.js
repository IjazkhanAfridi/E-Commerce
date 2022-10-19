import { Box } from '@mui/material';
import Cart from './pages/Cart';
import LogIn from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width:{md: '80%',sm:"100%",xs:"100%"}}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<ProductList />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
