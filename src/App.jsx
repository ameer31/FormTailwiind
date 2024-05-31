import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Pages/Form/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
