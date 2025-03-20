import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateComplaint from './pages/CreateComplaint';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-complaint" element={<CreateComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
