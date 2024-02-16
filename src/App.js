import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './assets/css/dark.css'
import './assets/css/light.css'
import Home from './pages/Home';
import Form from './pages/Form';
import FormRent from './pages/FormRent';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form_rent" element={<FormRent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
