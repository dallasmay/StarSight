import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import FindPage from "./pages/FindPage/FindPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
