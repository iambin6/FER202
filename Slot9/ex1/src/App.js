import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FooterPage from './Pages/FooterPage';
import HomePage from './Pages/HomePage';
import BuildProfile from './Pages/BuildProfileSimple';
import ManageProfile from './Pages/ManageProfile';
import EditProfile from './Pages/EditProfile';
import TestPage from './Pages/TestPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProfileProvider } from './Context/ProfileContext';

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <HomePage />
            <div className="text-center my-4">
              <Link className="btn btn-primary" to="/build-profile">Build Your Profile</Link>
              <Link className="btn btn-secondary ms-2" to="/test">Test Page</Link>
            </div>
            <FooterPage />
          </>} />
          <Route path="/build-profile" element={<BuildProfile />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;
