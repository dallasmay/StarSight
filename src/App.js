import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import FindPage from "./pages/FindPage/FindPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TrackPage from "./pages/TrackPage/TrackPage";
import FindBodyPage from "./pages/FindBodyPage/FindBodyPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loggedInDrill = (state) => {
    console.log(`This is in the App component: ${state}`);
    setIsLoggedIn(state);
  }

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/find-body" element={<FindBodyPage />} />
        <Route path="/track" element={isLoggedIn ? <TrackPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage loggedInDrill={loggedInDrill} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
