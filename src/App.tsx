import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/pages/Login";
import PlayPage from "./components/pages/Play";
import LevelSelect from "./components/pages/Level";
import Gameplay from "./components/pages/Gameplay";
import Leaderboard from "./components/pages/Leaderboard";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/play"
            element={
              <ProtectedRoute>
                <PlayPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/level-select"
            element={
              <ProtectedRoute>
                <LevelSelect />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gameplay/:level"
            element={
              <ProtectedRoute>
                <Gameplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
