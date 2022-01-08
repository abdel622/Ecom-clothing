import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import Shop from './pages/shop/shop.component';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
