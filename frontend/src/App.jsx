import { Outlet } from "react-router-dom";
import { OverviewProvider } from "./context/Overviewcontext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <OverviewProvider>
        <div className="main">
          <Outlet />
        </div>
        <div id="footer">
          <Navbar />
        </div>
      </OverviewProvider>
    </AuthProvider>
  );
}

export default App;
