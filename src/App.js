import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/Product/ProductDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
