import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './app.css';
import BackToTop from './components/helper/back-to-top/back-to-top';
import ChangeTheme from './components/helper/change-theme/change-theme';
import ScrollToTop from './components/helper/scroll-to-top';
import { ThemeContext } from './contexts/theme-context';
import { BlogPage, HomePage, ProjectPage } from './pages';
import GamePage from './pages/game';
import Archives from './components/core-ui/game-detail/archives';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/blog' element={<BlogPage />} exact />
          <Route path='/projects' element={<ProjectPage />} exact />
          <Route path='/games' element={<GamePage />} exact />
          <Route path='/unity/archives' element={<Archives />} exact />
          <Route path='/unity/arplayingcard' element={<GamePage />} exact />
          <Route path='/unity/topdown' element={<GamePage />} exact />
          <Route path='/unity/fps' element={<GamePage />} exact />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;