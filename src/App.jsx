import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import Results from './pages/Results';
import Attendance from './pages/Attendance';
import FeeStatus from './pages/FeeStatus';
import Toppers from './pages/Toppers';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import ProfessionalDevelopment from './pages/ProfessionalDevelopment';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Admin from './pages/Admin';
import GateDevelopers from './pages/GateDevelopers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/gate" element={<GateDevelopers />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="academics" element={<Academics />} />
        <Route path="professional-development" element={<ProfessionalDevelopment />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="results" element={<Results />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="fee-status" element={<FeeStatus />} />
        <Route path="toppers" element={<Toppers />} />
        <Route path="admin" element={<Admin />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  );
}