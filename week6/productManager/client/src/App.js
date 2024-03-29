import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Main from './views/Main';
import Product from './components/Product';
import ProductUpdate from './components/ProductUpdate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Main/>} path = "/home" default />
          <Route element = {<Product/>} path = "/product/:id"/>
          <Route element = {<ProductUpdate/>} path = "/product/edit/:id"/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
