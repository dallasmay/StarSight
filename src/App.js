import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
