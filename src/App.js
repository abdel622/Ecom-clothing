import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from 'react-router-dom';


const CategoryPage = () =>{
  return (
    <div>
      <h1>Hello Again!</h1>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
