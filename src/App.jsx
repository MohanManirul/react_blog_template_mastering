import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCategoryPage from './pages/ByCategoryPage';
import DetailsPage from "./pages/DetailsPage";


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/"  element={<HomePage />}/>
              <Route path="/by-category"  element={<ByCategoryPage />}/>
              <Route path="/details"  element={<DetailsPage />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;