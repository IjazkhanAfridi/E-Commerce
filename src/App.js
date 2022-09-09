import { Box } from '@mui/material';
import Cart from './pages/Cart';
import LogIn from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';

import ProductList from './pages/ProductList';
import Home from './pages/Home';

function App() {
  return (
    <Box>
    <Home />
    <ProductList />
    <Product />
    <Register />
    <LogIn />
    <Cart />
    </Box>
  );
}

export default App;
