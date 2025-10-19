import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Team from "./components/Team/Team.jsx";
import TeamDetails from "./components/TeamDetails/TeamDetails.jsx";
import NotFound from "./Pages/NotFound.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          {/* Pages inside Layout */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />

          {/* Team pages independent of Layout */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}
