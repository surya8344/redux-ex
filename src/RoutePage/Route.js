import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Form from '../components/Form';

export default function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form/" element={<Form />} />
        {/* <Route path="form/dashboard/" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
