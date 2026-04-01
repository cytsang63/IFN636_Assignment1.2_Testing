import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import DeveloperProfile from './pages/DeveloperProfile';
import PortfolioWorkspace from './pages/PortfolioWorkspace';
import Tasks from './pages/Tasks';
import RequireAuth from './components/RequireAuth';
import PublicPortfolio from './pages/PublicPortfolio';
import MySkill from './pages/MySkill';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/explore" element={<PublicPortfolio />} />
        <Route path="/workspace" element={<Home />} />
        <Route path="/my-skill" element={<MySkill />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/developer-profile"
          element={
            <RequireAuth>
              <DeveloperProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/portfolio"
          element={
            <RequireAuth>
              <PortfolioWorkspace />
            </RequireAuth>
          }
        />
        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
