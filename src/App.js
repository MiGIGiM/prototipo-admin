import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import AdminProfile from './pages/admin-profile';
import Login from './pages/login';
import UserPage from './pages/users';
import UserProfile from './pages/user-profile';
import EntitiesPage from './pages/entities-page';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login /> } />
      <Route path="home" element={<Home /> } ></Route>
      <Route path="admin-profile" element={<AdminProfile />} />
      <Route path="users" element={<UserPage />} />
      <Route path="user-profile" element={<UserProfile />} />
      <Route path="entities" element={<EntitiesPage />} />
    </Routes>
  </BrowserRouter>
)

export default App;
