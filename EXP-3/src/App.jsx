import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Viewer from "./pages/Viewer";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* Default */}

          <Route
            path="/"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />

          {/* Login */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Dashboard */}

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Student */}

          <Route
            path="/viewer"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "student",
                  "parent",
                  "staff",
                  "management"
                ]}
              >
                <Viewer />
              </ProtectedRoute>
            }
          />

          {/* Staff */}

          <Route
            path="/editor"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "staff",
                  "management"
                ]}
              >
                <Editor />
              </ProtectedRoute>
            }
          />

          {/* Management */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "management"
                ]}
              >
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Unauthorized */}

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* Invalid route */}

          <Route
            path="*"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;