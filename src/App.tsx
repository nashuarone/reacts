import { lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ErrorBoundary from "./ErrorBoundary";
import { Buffer } from "./pages/Buffer";

const Home = lazy(() => import('./pages/Home').then(module => ({
  default: module.Home
})));
const Categories = lazy(() => import('./pages/Categories').then(module => ({
  default: module.Categories
})));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({
  default: module.NotFound
})));
const Locations = lazy(() => import('./pages/Locations').then(module => ({
  default: module.Locations
})));
const Characters = lazy(() => import('./pages/Characters').then(module => ({
  default: module.Characters
})));
const Episodes = lazy(() => import('./pages/Episodes').then(module => ({
  default: module.Episodes
})));
const Login = lazy(() => import('./pages/Login').then(module => ({
  default: module.Login
})));
const CategoriesLayout = lazy(() => import('./layout/CategoriesLayout').then(module => ({
  default: module.CategoriesLayout
})));
const Character = lazy(() => import('./components/Character').then(module => ({
  default: module.Character
})));
const Location = lazy(() => import('./components/Location').then(module => ({
  default: module.Location
})));
const Episode = lazy(() => import('./components/Episode').then(module => ({
  default: module.Episode
})));
const AuthStatus = lazy(() => import('./components/AuthStatus').then(module => ({
  default: module.AuthStatus
})));
const PrivateRoute = lazy(() => import('./components/PrivateRoute').then(module => ({
  default: module.PrivateRoute
})));

function App() {
  return (
    <AuthProvider>
      <div className="card">
        <AuthStatus />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/buffer">Buffer</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categories"
            element={
              <ErrorBoundary>
                <PrivateRoute>
                  <CategoriesLayout />
                </PrivateRoute>
              </ErrorBoundary>
            }
          >
              <Route index element={<Categories />} />
              <Route path="characters" element={<Characters />} />
              <Route path="characters/:id" element={<Character />} />
              <Route path="locations" element={<Locations />} />
              <Route path="locations/:id" element={<Location />} />
              <Route path="episodes" element={<Episodes />} />
              <Route path="episodes/:id" element={<Episode />} />
          </Route>
          <Route path="/buffer" element={<Buffer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
