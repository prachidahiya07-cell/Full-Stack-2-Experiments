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
import Parent from "./pages/Parent";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* DEFAULT */}

          <Route
            path="/"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />

          {/* LOGIN */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* HOME */}

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* STUDENT */}

          <Route
            path="/portal/student"
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

          {/* PARENT */}

          <Route
            path="/portal/parent"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "parent",
                  "staff",
                  "management"
                ]}
              >
                <Parent />
              </ProtectedRoute>
            }
          />

          {/* STAFF */}

          <Route
            path="/portal/staff"
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

          {/* MANAGEMENT */}

          <Route
            path="/portal/management"
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

          {/* UNAUTHORIZED */}

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* INVALID */}

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