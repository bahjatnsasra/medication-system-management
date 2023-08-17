import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DoctorPage } from './pages/doctors_page/DoctorPage'
import { PatientPage } from './pages/patients_page/PatientPage'
import { DoctorPatientList } from './components/doctor_components/DoctorPatientList';
import NavBar from './components/general_components/NavBar';
import './App.css';
import Blog from './pages/Home/Blog';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/doctor/patients" element={<DoctorPatientList />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
