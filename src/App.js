import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment} from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import FindPage from "./pages/FindPage/FindPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TrackPage from "./pages/TrackPage/TrackPage";
import FindBodyPage from "./pages/FindBodyPage/FindBodyPage";
import ChecklistPage from "./pages/ChecklistPage/ChecklistPage";
import NotesPage from "./pages/NotesPage/NotesPage";

function App() {
  const isAuth = useSelector((state) => state.isAuthenticated);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/find-body" element={<FindBodyPage />} />
        <Route path="/track" element={isAuth ? <TrackPage /> : <Navigate to="/login" />} />
        <Route path="/checklist" element={isAuth ? <ChecklistPage /> : <Navigate to="/login" />} />
        <Route path="/notes" element={isAuth ? <NotesPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
