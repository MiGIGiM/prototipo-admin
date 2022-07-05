import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import AdminProfile from './pages/admin-profile';
import Login from './pages/login';
import UserPage from './pages/users';
import UserProfile from './pages/user-profile';
import EntitiesPage from './pages/entities-page';
import AddFood from './pages/add-food';
import AddSport from './pages/add-sport';
import AddUser from './pages/add-user';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login /> } />
      <Route path="home" element={<Home /> } ></Route>
      <Route path="admin-profile" element={<AdminProfile />} />
      <Route path="users" element={<UserPage />} />
      <Route path="user-profile" element={<UserProfile />} />
      <Route path="entities" element={<EntitiesPage />} />
      <Route path="add-food" element={<AddFood />} />
      <Route path="add-sport" element={<AddSport />} />
      <Route path="add-user" element={<AddUser />} />
    </Routes>
  </BrowserRouter>
)

export default App;
