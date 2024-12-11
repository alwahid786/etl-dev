import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import DashboardLayout from "./pages/main";
import Dashboard from "./pages/main/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />

          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
