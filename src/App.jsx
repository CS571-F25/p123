import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CityExplorerPage from "./pages/CityExplorerPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4 mb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<CityExplorerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

